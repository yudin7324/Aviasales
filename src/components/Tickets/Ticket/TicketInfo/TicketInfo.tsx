import React, { FC } from 'react';
import cn from '../Ticket.module.scss';

type TicketInfoProps = {
  origin: string;
  destination: string;
  date: string;
  duration: number;
  stops: any[];
}

const TicketInfo: FC<TicketInfoProps> = ({
  origin,
  destination,
  date,
  duration,
  stops
}) => {

  const getTimeFromMins = (mins: number) => {
    let hours = Math.trunc(mins / 60)
    let minutes = mins % 60
    return hours + 'ч ' + minutes + 'м'
  }

  const getTimeDestination = (date: string) => {
    let originTime = new Date(date).toLocaleTimeString('ru-Ru').substr(0, 5)
    // TODO Сделать корректное отображение времени
    let destinationTime = '18:34'


    return `${originTime} - ${destinationTime}`
  }

  const getStopsHeader = (stops: any[]) => {
    if (stops.length === 0) {
      return "Без пересадок"
    } else if(stops.length === 1) {
      return stops.length + " Пересадка"
    } else if (stops.length >= 2) {
      return stops.length + " Пересадки"
    }
  }

  return (
    <div>
      <div className={cn['ticket__row']}>
        <div className={cn['ticket__col']}>
          <div className={cn['ticket__col-top']}>{origin} – {destination}</div>
          <div className={cn['ticket__col-bot']}>{getTimeDestination(date)}</div>
        </div>
        <div className={cn['ticket__col']}>
          <div className={cn['ticket__col-top']}>В пути</div>
          <div className={cn['ticket__col-bot']}>{getTimeFromMins(duration)}</div>
        </div>
        <div className={cn['ticket__col']}>
          <div className={cn['ticket__col-top']}>
            {getStopsHeader(stops)}
          </div>
          <div className={cn['ticket__col-bot']}>
            {stops.join(",")}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketInfo;
