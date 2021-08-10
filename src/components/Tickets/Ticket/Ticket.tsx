import React, { FC } from 'react';
import cn from './Ticket.module.scss';
import TicketInfo from './TicketInfo/TicketInfo';
import { generateId } from './../../../utils/generateId';

type TicketProps = {
  carrier: string;
  price: number;
  segments: any[];
}

const Ticket: FC<TicketProps> = ({
  carrier,
  price,
  segments
}) => {

  const priceFormat = () => {
    return price.toString().split("").reverse().reduce((agregation, char, i) => {
      if (i % 3 === 0) {
          return agregation + " " + char
      }
      return agregation + char 
    }, "Р ").split("").reverse().join("")
  }

  return (
    <div className={cn['ticket']}  >
      <div className={cn['ticket__header']}>
        <div className={cn['ticket__header-price']}>{priceFormat()}</div>
        <div className={cn['ticket__header-logo']}>
            <img src={`//pics.avs.io/99/36/{${carrier}}.png`} alt="logo" />
        </div>
      </div>
      <div className={cn['ticket__info']}>
        {segments.map((item) => <TicketInfo key={generateId()} {...item}/>)}
      </div>
    </div>
  )
}

export default Ticket;
