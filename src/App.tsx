import React from 'react';
import Logo from './components/Logo/Logo';
import styles from './app.module.scss';
import Sidebar from './components/Sidebar/Sidebar';
import { Buttons } from './components';
import Tickets from './components/Tickets/Tickets';

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Logo/>
        </header>

        <main className={styles.content}>
  
          <div className={styles.content__left}>
            <Sidebar/>
          </div>

          <div className={styles.content__right}>
            <Buttons/>
            <Tickets/>
          </div>

        </main>
      </div>
    </div>
  );
}

export default App;
