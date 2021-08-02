import React from 'react';
import Button from './Button/Button';
import styles from './Buttons.module.scss';

const Buttons = () => {

  const buttonsData = [
    {
      id: 'chip',
      label: 'Самый дешевый',
    },
    {
      id: 'fast',
      label: 'Самый быстрый',
    },
    {
      id: 'opti',
      label: 'Оптимальный',
    },
  ]

  return (
    <div className={styles.buttons}>
      {buttonsData.map((button) => <Button key={button.id} id={button.id} label={button.label}/>)}
    </div>
  )
}

export default Buttons;
