import { PropertyData } from '../../types';
import Card from '../Card/Card';
import styles from './Cards.module.scss';

interface CharacterCardsProps {
  data: PropertyData[];
}

export default function CharacterCards({ data }: CharacterCardsProps) {
  return (
    <ul className={styles.cards}>
      {data.map(({ id, title, image }) => (
        <Card key={id} id={id} title={title} image={image} />
      ))}
    </ul>
  );
}
