import { Character } from '../../types';
import CharacterCard from '../CharacterCard/CharacterCard';
import styles from './CharacterCards.module.scss';

interface CharacterCardsProps {
  data: Character[];
}

export default function CharacterCards({ data }: CharacterCardsProps) {
  return (
    <ul className={styles.cards}>
      {data.map((data) => (
        <CharacterCard key={data.id} data={data} />
      ))}
    </ul>
  );
}
