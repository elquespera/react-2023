import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

interface HeaderProps {
  title?: string;
}

export default class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <header className={styles.header}>
        <h2>{this.props.title}</h2>
        <nav>
          <ul className={styles.links}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `${styles.link} ${isActive && styles.active}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) => `${styles.link} ${isActive && styles.active}`}
              >
                About us
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
