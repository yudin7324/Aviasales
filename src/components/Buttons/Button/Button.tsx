import React, { FC } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  id: string;
  label: string;
}

const Button: FC<ButtonProps> = ({
  id,
  label
}) => {
  return (
    <label className={styles.button}>
      <input className={styles.button__radio} id={id} type="radio" name="tabs" />
      <div className={styles.button__label}>{label}</div>
    </label>
  )
}

export default Button;
