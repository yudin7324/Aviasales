import React, { useEffect, useState } from 'react';
import Ticket from './Ticket/Ticket';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { getSearchId, getTickets } from '../../features/tickets/ticketsSlice';

const Tickets = () => {

  // const data = useSelector((state: RootState) => state.data);
  const tickets = useSelector((state: RootState) => state.data.tickets);
  const status = useSelector((state: RootState) => state.data.status);
  const stop = useSelector((state: RootState) => state.data.stop);
  const searchId = useSelector((state: RootState) => state.data.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearchId());
  },[dispatch])

  useEffect(() => {
    if (searchId) {
      dispatch(getTickets(searchId))
    }
  }, [dispatch, searchId])






  return (
    <div>
      {/* {status === 'loading' ? <h1>Loading...</h1> : ''} */}
      <Ticket/>
    </div>
  )
}

export default Tickets;
