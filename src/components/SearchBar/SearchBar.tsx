import { useEffect, useRef } from 'react';
import { getLocalStorage, setLocalStorage } from '../../lib/storage';
import Icon from '../Icon/Icon';
import styles from './SearchBar.module.scss';

export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const { search } = getLocalStorage();
    const input = inputRef.current;

    if (search && input) input.value = search;

    return () => setLocalStorage({ search: input?.value });
  }, [inputRef]);

  return (
    <label className={styles.wrapper}>
      <Icon type="search" className={styles.icon} />
      <input type="text" ref={inputRef} placeholder="Search" className={styles.input} />
    </label>
  );
}
