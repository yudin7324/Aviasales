import React, { useEffect, useState } from 'react';
import Logo from './components/Logo/Logo';
import cn from './app.module.scss';
import { DisplayButton, SortButtons, Tickets } from './components';
import { RootState } from './store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchId, getTickets } from './features/tickets/ticketsSlice';
import Filter from './components/Filter/Filter';
import { checkboxData } from './features/tickets/constants';
import { useFilterTickets } from './features/tickets/useTickets';

const App = () => {
  const [activeFilter, setActiveFilter] = useState<any>(['NONE', 'ONE', 'TWO', 'THREE']);
  const [selectedSort, setSelectedSort] = useState('');
  const [displayTickets, setDisplayTickets] = useState<number>(6);

  const tickets = useSelector((state: RootState) => state.data.tickets);
  const searchId = useSelector((state: RootState) => state.data.id);
  const dispatch = useDispatch();
  
  const filteredTickets = useFilterTickets(activeFilter, tickets, selectedSort)

  useEffect(() => {
    dispatch(getSearchId());
  },[dispatch]);

  useEffect(() => {
    if (searchId) {
      dispatch(getTickets(searchId));
    }
  }, [dispatch, searchId]);

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

  const sortHandleChange = (value: string) => {
    setSelectedSort(value);
  }
  
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
            <SortButtons 
              sortHandleChange={sortHandleChange}
            />
            <Tickets 
              filterTickets={filteredTickets}
              displayTickets={displayTickets}
            />
            <DisplayButton 
              setDisplayTickets={setDisplayTickets} 
              displayTickets={displayTickets}
              activeFilter={activeFilter}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
