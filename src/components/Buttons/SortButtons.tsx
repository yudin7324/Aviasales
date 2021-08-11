import React, { FC } from 'react';
import { sortButtonData } from '../../features/tickets/constants';
import Button from './SortButton/SortButton';
import cn from './SortButtons.module.scss';

type SortButtonsProps = {
  sortHandleChange: (arg1: string) => void;
}

const SortButtons: FC<SortButtonsProps> = ({
  sortHandleChange,
}) => {

  return (
    <div className={cn['buttons']}>
      {sortButtonData.map((button) => 
        <Button 
          key={button.value} 
          value={button.value} 
          label={button.label}
          sortHandleChange={sortHandleChange}
        />)}
    </div>
  )
}

export default SortButtons;
