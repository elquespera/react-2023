import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
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
