import { Character } from '../../types';
import CharacterCard from '../CharacterCard/CharacterCard';
import styles from './CharacterCards.module.scss';

interface CharacterCardsProps {
  data: Character[];
}

export default function CharacterCards({ data }: CharacterCardsProps) {
  return (
    <ul className={styles.cards}>
      {data.map(({ id, name, image }) => (
        <CharacterCard key={id} id={id} name={name} image={image} />
      ))}
    </ul>
  );
}
