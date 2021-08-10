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
    let dateStart = new Date(date);
    let dateEnd = new Date(dateStart.getTime() + duration * 60 * 1000);
    return dateStart.toTimeString().slice(0, 5) + " - " + dateEnd.toTimeString().slice(0, 5);
  }

  const getStopsHeader = (stops: any[]) => {
    switch (stops.length) {
      case 0:
        return 'без пересадок'
      case 1:
        return `${stops.length} пересадка` 
      default:
        return `${stops.length} пересадки`
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
