import clsx from 'clsx';
import convertDate from '../../lib/convertDate';
import styles from './CharacterInfo.module.scss';
import { useEffect, useState } from 'react';
import { Character } from '../../types';
import Loader from '../Loader/Loader';
import { fetchCharacter } from '../../lib/fetchCharacters';

interface CharacterInfoProps {
  id?: number;
}

export default function CharacterInfo({ id }: CharacterInfoProps) {
  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    const loadCharacter = async () => {
      if (id) {
        const response = await fetchCharacter(id);
        setCharacter(response);
      } else {
        setCharacter(undefined);
      }
    };

    loadCharacter();
  }, [id]);

  return character ? (
    <div className={styles.wrapper}>
      <img className={styles.image} src={character.image} alt={character.name} />
      <div className={styles.info}>
        <span className={styles.species}>{character.species}</span>
        <span
          className={clsx(
            styles.status,
            character.status === 'Alive' && styles.alive,
            character.status === 'Dead' && styles.dead
          )}
        >
          {character.status}
        </span>
        <span className={styles.location}>Location: {character.location?.name}</span>
        <span className={styles.created}>Created: {convertDate(character.created)}</span>
      </div>
    </div>
  ) : (
    <Loader />
  );
}
