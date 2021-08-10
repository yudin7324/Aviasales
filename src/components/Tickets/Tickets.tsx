import React, { FC } from 'react';
import Ticket from './Ticket/Ticket';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { generateId } from '../../utils/generateId';

type TicketsProps = {
  displayTickets: number;
  filterTickets: any[];
}

const Tickets: FC<TicketsProps> = ({
  displayTickets,
  filterTickets,
}) => {
  const status = useSelector((state: RootState) => state.data.status);


  return (
    <>
      {status === 'loading' && <h1>Загрузка...</h1>}
      {filterTickets.map((ticket) => {
        return <Ticket 
          key={generateId()}
          price={ticket.price} 
          segments={ticket.segments} 
          carrier={ticket.carrier}
        />}).slice(1, displayTickets)}
    </>
  )
}

export default Tickets;
