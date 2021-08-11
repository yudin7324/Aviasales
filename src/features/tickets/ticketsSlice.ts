import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { TicketsState } from './types';

const initialState: TicketsState = {
  tickets: [],
  status: '',
  error: null,
  id: '',
}

export const getSearchId = createAsyncThunk(
  'tickets/getSearchId',
  async (_, {rejectWithValue}) => {
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
// TODO Решить проблему с обработкой 500 ошибки 
export const getTickets = createAsyncThunk(
    'tickets/getTickets',
    async (searchId: string, {rejectWithValue, dispatch} ) => {

      try {
        const subscribe = async () => {  

          const response = await axios(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);

          if (response.data.stop !== true) {
            dispatch({
              type: 'tickets/getTickets/fulfilled',
              payload: {
                tickets: [...response.data.tickets],
              }
            })
            await subscribe()
          }
          return response.data
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
    builder.addCase(getSearchId.fulfilled, (state, action) => {
      state.id = action.payload
    })
    builder.addCase(getTickets.pending, (state, action) => {
      state.status = 'loading'
    })
    builder.addCase(getTickets.fulfilled, (state, action) => {
      state.tickets.push(...action.payload.tickets)
      state.status = 'resolved'
    })
    builder.addCase(getTickets.rejected, (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    })
  }
});

export default ticketsSlice.reducer

