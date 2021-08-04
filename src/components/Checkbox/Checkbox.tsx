import React, { FC, useState } from 'react';
import cn from './checkbox.module.scss';

type CheckboxProps = {
  label: string;
  id: string;
  selectCheckbox: (arg: string, arg2: boolean) => void;
}

const Checkbox: FC<CheckboxProps> = ({
  label, 
  id,
  selectCheckbox,
}) => {

  const [check, setCheck] = useState(true);

  return (
      <label className={cn['checkbox']}>
        <input
            className={cn['checkbox__item']}
            type="checkbox"
            name={id}
            onChange={() => setCheck(!check)}
            onClick={() => selectCheckbox(id, check)}
            checked={check}
        />
        {label}
      </label>
  )
}

export default Checkbox;
