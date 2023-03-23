import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconType } from '../../types';
import Icon from '../Icon/Icon';
import styles from './NavigationLink.module.scss';

interface NavigationLinkProps {
  title: string;
  to: string;
  icon?: IconType;
}

export default class NavigationLink extends React.Component<NavigationLinkProps> {
  constructor(props: NavigationLinkProps) {
    super(props);
  }
  render() {
    const { to, title, icon } = this.props;
    return (
      <li>
        <NavLink
          to={to}
          className={({ isActive }) => `${styles.link} ${isActive && styles.active}`}
        >
          {icon && <Icon type={icon} />}
          <span className={styles.title}>{title}</span>
        </NavLink>
      </li>
    );
  }
}
