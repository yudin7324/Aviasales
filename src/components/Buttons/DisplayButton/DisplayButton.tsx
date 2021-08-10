import React, { FC } from 'react'
import cn from './DisplayButton.module.scss';

type DisplayButtonProps = {
  setDisplayTickets: React.Dispatch<React.SetStateAction<number>>;
  displayTickets: number;
}

const DisplayButton: FC<DisplayButtonProps> = ({
  setDisplayTickets,
  displayTickets
}) => {
  return (
    <>
      <button 
        className={cn['display-button']}
        onClick={() => setDisplayTickets(displayTickets + 5)}
      >
        Показать еще 5 билетов!
      </button>
    </>
  )
}

export default DisplayButton
