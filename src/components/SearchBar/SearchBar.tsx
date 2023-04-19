import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectSearchQuery, setQuery } from '../../store/search';
import Icon from '../Icon/Icon';
import styles from './SearchBar.module.scss';

export default function SearchBar() {
  const { query } = useAppSelector(selectSearchQuery);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(setQuery(value));
  };

  useEffect(() => setValue(query), [query]);

  return (
    <form onSubmit={handleSubmit} data-testid="search-bar-form">
      <div className={styles.wrapper}>
        <label className={styles.inputWrapper}>
          <Icon type="search" className={styles.icon} />
          <input
            type="text"
            value={value}
            onChange={handleInputChange}
            placeholder="Search by name"
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.submit} title="Search">
          <Icon type="search" />
        </button>
      </div>
    </form>
  );
}
