import React from 'react';
import { IconType } from '../../types';
import Icon from '../Icon/Icon';
import styles from './Button.module.scss';
import clsx from 'clsx';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: IconType;
  children?: React.ReactNode;
}

export default function Button({ icon, children, className, ...props }: ButtonProps) {
  return (
    <button {...props} className={clsx(styles.button, className)}>
      {icon && <Icon type={icon} className={styles.icon} />}
      {children}
    </button>
  );
}
