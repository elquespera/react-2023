import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about-us">About us</NavLink>
      </header>
    );
  }
}
