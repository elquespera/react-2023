import { PropertyData } from '../../types';
import FormCard from '../FormCard/FormCard';
import styles from './FormCards.module.scss';

interface FormCardsProps {
  data: PropertyData[];
}

export default function FormCards({ data }: FormCardsProps) {
  return (
    <ul className={styles.cards}>
      {data.map((data) => (
        <FormCard key={data.id} data={data} />
      ))}
    </ul>
  );
}
