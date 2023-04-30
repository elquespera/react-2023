import React from 'react';
import { clsx } from 'clsx';
import { IconType } from '../../types';
import styles from './Icon.module.scss';

import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as AboutIcon } from '../../assets/icons/about.svg';
import { ReactComponent as AddIcon } from '../../assets/icons/add.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';

interface IconProps extends React.HTMLAttributes<HTMLImageElement> {
  type: IconType;
}

const ICONS: { [key in IconType]: React.FC | undefined } = {
  search: SearchIcon,
  home: HomeIcon,
  about: AboutIcon,
  add: AddIcon,
  close: CloseIcon,
};

export default function Icon({ type, className, ...props }: IconProps) {
  const CurrentIcon = ICONS[type];
  return (
    <span
      {...props}
      className={clsx(styles.icon, className)}
      style={{ display: 'inline-block', width: '1em', height: '1em' }}
    >
      {CurrentIcon && <CurrentIcon />}
    </span>
  );
}
