import React from 'react';
import { clsx } from 'clsx';
import { IconType } from '../../types';
import styles from './Icon.module.scss';

import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as AboutIcon } from '../../assets/icons/about.svg';
import { ReactComponent as AddIcon } from '../../assets/icons/add.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';

interface IconProps extends React.ComponentProps<'img'> {
  type: IconType;
}

const ICONS: { [key in IconType]: React.FC | undefined } = {
  search: SearchIcon,
  home: HomeIcon,
  about: AboutIcon,
  add: AddIcon,
  close: CloseIcon,
};

export default class Icon extends React.Component<IconProps> {
  constructor(props: IconProps) {
    super(props);
  }
  render() {
    const CurrentIcon = ICONS[this.props.type];
    return (
      <span {...this.props} className={clsx(styles.icon, this.props.className)}>
        {CurrentIcon && <CurrentIcon />}
      </span>
    );
  }
}
