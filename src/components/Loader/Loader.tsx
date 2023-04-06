import clsx from 'clsx';
import styles from './Loader.module.scss';

interface LoaderProps {
  visible?: boolean;
}

export default function Loader({ visible }: LoaderProps) {
  return (
    <div className={clsx(styles.wrapper, visible && styles.visible)}>
      <div className={styles.loader} />
    </div>
  );
}
