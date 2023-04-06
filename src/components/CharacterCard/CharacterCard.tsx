import { Character } from '../../types';
import styles from './CharacterCard.module.scss';

interface CharacterCardProps {
  data: Character;
}

export default function CharacterCard({ data }: CharacterCardProps) {
  const { name, image } = data;
  return (
    <li className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image} alt={name} />
      </div>
      <div className={styles.name}>{name}</div>
    </li>
  );
}
