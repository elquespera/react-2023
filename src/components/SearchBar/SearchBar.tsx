import React, { useEffect, useRef } from 'react';
import { getLocalStorage, setLocalStorage } from '../../lib/storage';
import Icon from '../Icon/Icon';
import styles from './SearchBar.module.scss';

interface SearchBarProps {
  onSubmit?: (value: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const input = inputRef.current;

    if (onSubmit && input) {
      onSubmit(input.value);
    }
    setLocalStorage({ search: input?.value });
  };

  useEffect(() => {
    const { search } = getLocalStorage();
    const input = inputRef.current;

    if (search && input) input.value = search;

    return () => setLocalStorage({ search: input?.value });
  }, [inputRef]);

  return (
    <form onSubmit={handleSubmit} data-testid="search-bar-form">
      <div className={styles.wrapper}>
        <label className={styles.inputWrapper}>
          <Icon type="search" className={styles.icon} />
          <input type="text" ref={inputRef} placeholder="Search by name" className={styles.input} />
        </label>
        <button type="submit" className={styles.submit} title="Search">
          <Icon type="search" />
        </button>
      </div>
    </form>
  );
}
