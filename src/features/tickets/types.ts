export interface TicketInterface {
  price: number
  carrier: string
  segments: [
    {
      origin: string
      destination: string
      date: string
      stops: string[]
      duration: number
    },
    {
      origin: string
      destination: string
      date: string
      stops: string[]
      duration: number
    }
  ]
}
export interface TicketsState {
  tickets: any[];
  status: string;
  error: null | unknown;
  id: string;
}

export type GetTicketsArgs = {
  searchId: string;
  stop: boolean;
}

  


  
  