import { useAppSelector } from '../../store/hooks';
import { selectSubmissions } from '../../store/submissions';
import FormCard from '../FormCard/FormCard';
import styles from './FormCards.module.scss';

export default function FormCards() {
  const data = useAppSelector(selectSubmissions);
  return (
    <ul className={styles.cards}>
      {data.map((data) => (
        <FormCard key={data.id} data={data} />
      ))}
    </ul>
  );
}
