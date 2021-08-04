import React, { FC, useEffect } from 'react';
import Ticket from './Ticket/Ticket';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { getSearchId, getTickets } from '../../features/tickets/ticketsSlice';
import { generateId } from '../../utils/generateId';

type TicketsProps = {
  tickets: any[];
}

const Tickets: FC<TicketsProps> = ({
  tickets
}) => {
 
  const status = useSelector((state: RootState) => state.data.status);
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

  const openList = () => {
      return 6
  }

  return (
    <>
      {status === 'loading' && <h1>Загрузка...</h1>}
      {tickets.map((ticket) => {
        return <Ticket 
          key={generateId()}
          price={ticket.price} 
          segments={ticket.segments} 
          carrier={ticket.carrier}
        />}).slice(1, openList())}
    </>
  )
}

export default Tickets;
