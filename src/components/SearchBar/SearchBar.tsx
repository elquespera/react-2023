import React from 'react';
import styles from './SearchBar.module.scss';

export default class SearchBar extends React.Component {
  render() {
    return (
      <label className={styles.wrapper}>
        <input type="text" className={styles.input} />
      </label>
    );
  }
}
