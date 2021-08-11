import React, { FC } from 'react'
import cn from './DisplayButton.module.scss';

type DisplayButtonProps = {
  setDisplayTickets: React.Dispatch<React.SetStateAction<number>>;
  displayTickets: number;
  activeFilter: any[];
}

const DisplayButton: FC<DisplayButtonProps> = ({
  setDisplayTickets,
  displayTickets,
  activeFilter,
}) => {

  if (activeFilter.length === 0) {
    return <h2>Необходимо выбрать параметр</h2>
  }

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
