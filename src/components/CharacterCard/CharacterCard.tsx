import { useState } from 'react';
import { Character } from '../../types';
import Modal from '../Modal/Modal';
import styles from './CharacterCard.module.scss';
import clsx from 'clsx';
import convertDate from '../../lib/convertDate';

interface CharacterCardProps {
  data: Character;
}

export default function CharacterCard({ data }: CharacterCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const { name, image, species, status, created, location } = data;
  return (
    <>
      <li className={styles.card} onClick={() => setModalOpen(true)}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={image} alt={name} />
        </div>
        <div className={styles.name}>{name}</div>
      </li>
      <Modal open={modalOpen} title={name} onClose={() => setModalOpen(false)}>
        <div className={styles.modal}>
          <img className={styles.image} src={image} alt={name} />
          <div className={styles.info}>
            <span className={styles.species}>{species}</span>
            <span
              className={clsx(
                styles.status,
                status === 'Alive' && styles.alive,
                status === 'Dead' && styles.dead
              )}
            >
              {status}
            </span>
            <span className={styles.location}>Location: {location?.name}</span>
            <span className={styles.created}>Created: {convertDate(created)}</span>
          </div>
        </div>
      </Modal>
    </>
  );
}
