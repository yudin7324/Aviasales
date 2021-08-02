import React, { FC } from 'react';
import styles from './checkbox.module.scss';

type CheckboxProps = {
  label: string;
  id: string;
}

const Checkbox: FC<CheckboxProps> = ({
  label, 
  id
}) => {
  return (
      <label className={styles.checkbox}>
        <input
            className={styles.checkbox__item}
            type="checkbox"
            name={id}
            onChange={() => {}}
        />
        {label}
      </label>
  )
}

export default Checkbox;
