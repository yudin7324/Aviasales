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
  


  
  