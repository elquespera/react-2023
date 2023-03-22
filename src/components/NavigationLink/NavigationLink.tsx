import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationLink.module.scss';

interface NavigationLinkProps {
  title: string;
  to: string;
}

export default class NavigationLink extends React.Component<NavigationLinkProps> {
  constructor(props: NavigationLinkProps) {
    super(props);
  }
  render() {
    const { to, title } = this.props;
    return (
      <li>
        <NavLink
          to={to}
          className={({ isActive }) => `${styles.link} ${isActive && styles.active}`}
        >
          {title}
        </NavLink>
      </li>
    );
  }
}
