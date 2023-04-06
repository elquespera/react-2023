import { useState } from 'react';
import { Character } from '../../types';
import Modal from '../Modal/Modal';
import styles from './CharacterCard.module.scss';

interface CharacterCardProps {
  data: Character;
}

export default function CharacterCard({ data }: CharacterCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const { name, image } = data;
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
        </div>
      </Modal>
    </>
  );
}
