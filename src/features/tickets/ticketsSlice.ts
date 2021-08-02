import { createSlice, createAsyncThunk, ThunkDispatch, AnyAction } from '@reduxjs/toolkit'
import axios from 'axios';
import { useState } from 'react';
import { GetTicketsArgs, TicketsState } from './types';

const initialState: TicketsState = {
  tickets: [],
  status: '',
  error: null,
  id: '',
  stop: false,
}

export const getSearchId = createAsyncThunk(
  'tickets/getSearchId',
  async (arg, {rejectWithValue}) => {
    try {
      const response = await axios.get('https://front-test.beta.aviasales.ru/search');

      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return response.data.searchId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const getTickets = createAsyncThunk(
    'tickets/getTickets',
    async (searchId: string, {rejectWithValue, dispatch} ) => {

      try {
        const subscribe = async () => {  
          const response = await axios(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`).then((res) => {
            if (res.data.stop !== true) {
              dispatch({
                type: 'tickets/getTickets/fulfilled',
                payload: [...res.data.tickets]
              })
              subscribe()
            }
            return res
          })
          console.log(response.data.stop);
          return response.data.tickets
        }
        return subscribe();
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
)

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTickets.pending, (state, action) => {
      state.status = 'loading'
    })
    builder.addCase(getTickets.fulfilled, (state, action) => {
      state.tickets.push(...action.payload)
      state.status = 'resolved'
    })
    builder.addCase(getTickets.rejected, (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    })
    builder.addCase(getSearchId.fulfilled, (state, action) => {
      state.id = action.payload
    })
  }
});

export default ticketsSlice.reducer

