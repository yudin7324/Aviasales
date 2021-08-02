

export interface TicketsState {
  tickets: any[];
  status: string;
  error: null | unknown;
  id: string;
  stop: boolean;
}


export type Tickets = {
  value: any[];
};

export type GetTicketsArgs = {
  searchId: string;
  stop: boolean;
}
  


  
  