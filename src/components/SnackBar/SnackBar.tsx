import { useCallback, useEffect } from 'react';
import { SNACKBAR_TIMEOUT } from '../../consts';
import Icon from '../Icon/Icon';
import styles from './SnackBar.module.scss';

interface SnackBarProps {
  title?: string;
  onClose?: () => void;
}

export default function SnackBar({ title, onClose }: SnackBarProps) {
  const handleClose = useCallback(() => onClose && onClose(), [onClose]);

  useEffect(() => {
    const timer = setTimeout(() => handleClose(), SNACKBAR_TIMEOUT);

    return () => clearTimeout(timer);
  }, [title, handleClose]);

  if (!title) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <button className={styles.close} onClick={handleClose}>
          <Icon type="close" />
        </button>
        <span className={styles.title}>{title}</span>
      </div>
    </div>
  );
}
