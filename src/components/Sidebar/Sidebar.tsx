import React, { FC } from 'react';
import Checkbox from './../Checkbox/Checkbox';
import styles from './Sidebar.module.scss';

type SidebarProps = {
  selectCheckbox: (arg: string, arg2: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({
  selectCheckbox,
}) => {

  const checkboxData = [
    {
      id: 'all',
      label: 'Все',
    },
    {
      id: 'none',
      label: 'Без пересадок',
    },
    {
      id: 'one',
      label: '1 пересадка',
    },
    {
      id: 'two',
      label: '2 пересадки',
    },
    {
      id: 'three',
      label: '3 пересадки',
    },
  ]


  return (
    <div className={styles.sidebar}>
      <h2 className={styles.sidebar__title}>Количество пересадок</h2>

      <form className={styles.sidebar__form}>
          {checkboxData.map((item) => 
            <Checkbox 
              key={item.id} 
              label={item.label} 
              id={item.id} 
              selectCheckbox={selectCheckbox}
            /> 
          )}
      </form>
    </div>
  )
}

export default Sidebar;
