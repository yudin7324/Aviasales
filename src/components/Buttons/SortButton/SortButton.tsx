import React, { FC } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  value: string;
  label: string;
  sortHandleChange: (arg1: string) => void;
}

const SortButton: FC<ButtonProps> = ({
  value,
  label,
  sortHandleChange,
}) => {

  return (
    <label className={styles.button}>
      <input 
        className={styles.button__radio} 
        value={value} 
        type="radio" 
        name="tabs" 
        onChange={(event) => sortHandleChange(event.target.value)}
      />
      <div className={styles.button__label}>{label}</div>
    </label>
  )
}

export default SortButton;
