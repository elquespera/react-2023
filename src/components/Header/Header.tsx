import React from 'react';
import { ROUTES } from '../../routes';
import NavigationLink from '../NavigationLink/NavigationLink';
import styles from './Header.module.scss';

interface HeaderProps {
  title?: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h2>{title}</h2>
      <nav>
        <ul className={styles.links}>
          {ROUTES.map(({ to, title, icon, invisible }) =>
            invisible ? null : <NavigationLink key={to} to={to} title={title} icon={icon} />
          )}
        </ul>
      </nav>
    </header>
  );
}
