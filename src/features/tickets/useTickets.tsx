import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const useTickets = () => {
  const allTickets: any = useSelector((state: RootState) => state.data.tickets);

  const checkboxData = [
    {
      id: 0,
      label: 'Без пересадок',
      value: 'NONE',
    },
    {
      id: 1,
      label: '1 пересадка',
      value: 'ONE',
    },
    {
      id: 2,
      label: '2 пересадки',
      value: 'TWO',
    },
    {
      id: 3,
      label: '3 пересадки',
      value: 'THREE',
    },
  ]

  return {
    tickets: allTickets,
    checkboxData,
  }
}

export {useTickets};
