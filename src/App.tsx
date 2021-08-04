import React from 'react';
import Logo from './components/Logo/Logo';
import cn from './app.module.scss';
import Sidebar from './components/Sidebar/Sidebar';
import { Buttons } from './components';
import Tickets from './components/Tickets/Tickets';
import { useTickets } from './features/tickets/useTickets';

const App = () => {
  const data = useTickets();
  const { allTickets } = data;

  const selectCheckbox = (id: string, check: boolean) => {
  
  }

  return (
    <div className={cn['app']}>
      <div className={cn['app__container']}>
        <header className={cn['app__header']}>
          <Logo/>
        </header>
        <main className={cn['app__content']}>
          <div>
            <Sidebar selectCheckbox={selectCheckbox} />
          </div>
          <div>
            <Buttons/>
            <Tickets tickets={allTickets}/>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
