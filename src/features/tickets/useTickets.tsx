import { useMemo } from "react";
import { TicketInterface } from "./types";

export const useSortTickets = (tickets: Array<TicketInterface>) => {

  const sortTickets = (selectedSort: string) => {
    switch (selectedSort) {
      case 'CHIP':
        return [...tickets].sort((a, b) => a.price - b.price)
      case 'FAST': 
        return [...tickets].sort((a, b) => a.segments[0].duration - b.segments[0].duration)
      case 'OPTIMAL':
        return [...tickets].sort((a, b) => (a.price - b.price) - (b.segments[0].duration - a.segments[0].duration))  
      default:
        return tickets;
    }
  }
  return sortTickets;
} 

export const useFilterTickets = ( activeFilter: Array<string>, tickets: Array<TicketInterface>, selectedSort: string ) => {

    const sortTickets = useSortTickets(tickets);

    const filteredTickets = useMemo(() => {
      if (activeFilter.length === 4) {
        return sortTickets(selectedSort);
      } else if (activeFilter.length < 4) {
        return sortTickets(selectedSort).filter((ticket: TicketInterface) => {
          if (activeFilter.includes('NONE') && ticket.segments.some((item) => item.stops.length === 0)) {
            return true;
          }
          if (activeFilter.includes('ONE') && ticket.segments.some((item) => item.stops.length === 1)) {
            return true;
          }
          if (activeFilter.includes('TWO') && ticket.segments.some((item) => item.stops.length === 2)) {
            return true;
          }
          if (activeFilter.includes('THREE') && ticket.segments.some((item) => item.stops.length === 3)) {
            return true;
          }
          return false
        });
      }
    }, [activeFilter, selectedSort, sortTickets]);

  return filteredTickets ? filteredTickets : tickets;
}

