import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const useTickets = () => {
  const allTickets = useSelector((state: RootState) => state.data.tickets);

  return {
    allTickets
  }
}

export {useTickets};
