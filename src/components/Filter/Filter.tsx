import { FC } from 'react';
import { useTickets } from '../../features/tickets/useTickets';
import cn from './Filter.module.scss';

type FilterProps = {
  onFilterChange: (arg: string) => void;
  activeFilter: any[];
}

const Filter:FC<FilterProps> = ({
  onFilterChange,
  activeFilter,
}) => {
  const { checkboxData } = useTickets();

  return (
    <div className={cn['filter']}>
      <h2 className={cn['filter__title']}>Количество пересадок</h2>
      <form className={cn['filter__form']}>
        <label className={cn['checkbox']}>
          <input
            className={cn['checkbox__item']}
            id="all"
            type="checkbox"
            onClick={() => onFilterChange("ALL")}
            checked={activeFilter?.length === checkboxData.length}
          />
          Все
        </label>
        {checkboxData.map((item) => 
          <label key={item.id} className={cn['checkbox']}>
            <input
              className={cn['checkbox__item']}
              type="checkbox"
              value={item.label}
              id={`checkbox-${item.id}`}
              name={item.label}
              checked={activeFilter?.includes(item.value)}
              onChange={() => onFilterChange(item.value)}
            />
          {item.label}
        </label>
        )}
      </form>
    </div>
  )
}

export default Filter;
