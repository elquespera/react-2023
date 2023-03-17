import React from 'react';
import { clsx } from 'clsx';
import { IconType } from '../../types';
import styles from './Icon.module.scss';

import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

interface IconProps extends React.ComponentProps<'img'> {
  type: IconType;
}

const ICONS: { [key in IconType]: React.FC | undefined } = {
  search: SearchIcon,
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
