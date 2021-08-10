import React from 'react';
import Button from './SortButton/SortButton';
import cn from './SortButtons.module.scss';

const SortButtons = () => {

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
      id: 'optimal',
      label: 'Оптимальный',
    },
  ]

  return (
    <div className={cn['buttons']}>
      {buttonsData.map((button) => <Button key={button.id} id={button.id} label={button.label}/>)}
    </div>
  )
}

export default SortButtons;
