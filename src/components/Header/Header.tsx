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
              <NavLink to="/" className={styles.link}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="about-us" className={styles.link}>
                About us
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
