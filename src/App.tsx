import React, { useEffect, useMemo, useState } from 'react';
import Logo from './components/Logo/Logo';
import cn from './app.module.scss';
import { DisplayButton, SortButtons, Tickets } from './components';
import { useTickets } from './features/tickets/useTickets';
import { RootState } from './store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchId, getTickets } from './features/tickets/ticketsSlice';
import Filter from './components/Filter/Filter';
import { TicketInterface } from './features/tickets/types';

const App = () => {
  const { tickets, checkboxData } = useTickets();
  const searchId = useSelector((state: RootState) => state.data.id);
  const [displayTickets, setDisplayTickets] = useState<number>(6)
  const dispatch = useDispatch();
  const [activeFilter, setActiveFilter] = useState<any>(['NONE', 'ONE', 'TWO', 'THREE']);

  useEffect(() => {
    dispatch(getSearchId());
  },[dispatch])

  useEffect(() => {
    if (searchId) {
      dispatch(getTickets(searchId))
    }
  }, [dispatch, searchId])

  
  const onFilterChange = (filter: string) => { 
    if (filter === "ALL") {
      if (activeFilter?.length === checkboxData.length) {
        setActiveFilter([]);
      } else {
        setActiveFilter(checkboxData.map(filter => filter.value));
      }
    } else {
      if (activeFilter?.includes(filter)) {
        const newFilter = activeFilter.filter((item: string) => item !== filter);
        setActiveFilter(newFilter);
      } else {
        setActiveFilter([...activeFilter, filter]);
      }
    }
  }

  const filterTickets = useMemo(() => {
    if (activeFilter.length === 4) {
      return tickets;
    } else if (activeFilter.length < 4) {
      return tickets.filter((ticket: TicketInterface) => {
        if (activeFilter.includes('NONE') && ticket.segments.some((item) => item.stops.length === 0)) {
          return true;
        }
        if (activeFilter.includes('ONE') && ticket.segments.some((item) => item.stops.length === 1)) {
          return true;
        }
        if (activeFilter.includes('TWO') && ticket.segments.some((item) => item.stops.length === 2)) {
          return true;
        }
        if (activeFilter.includes('THREE') && ticket.segments.some((item) => item.stops.length === 3)) {
          return true;
        }
        return false
      });
    }
  }, [activeFilter, tickets]);




  

  return (
    <div className={cn['app']}>
      <div className={cn['app__container']}>
        <header className={cn['app__header']}>
          <Logo/>
        </header>
        <main className={cn['app__content']}>
          <div>
            <Filter 
              onFilterChange={onFilterChange} 
              activeFilter={activeFilter}
            />
          </div>
          <div>
            <SortButtons />
            <Tickets 
              filterTickets={filterTickets}
              displayTickets={displayTickets}
            />
            <DisplayButton 
              setDisplayTickets={setDisplayTickets} 
              displayTickets={displayTickets}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
