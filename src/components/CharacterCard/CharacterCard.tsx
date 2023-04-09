import { useState } from 'react';
import Modal from '../Modal/Modal';
import styles from './CharacterCard.module.scss';
import CharacterInfo from '../CharacterInfo/CharacterInfo';

interface CharacterCardProps {
  id?: number;
  name?: string;
  image?: string;
}

export default function CharacterCard({ id, name, image }: CharacterCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <li className={styles.card} onClick={() => setModalOpen(true)}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={image} alt={name} />
        </div>
        <div className={styles.name}>{name}</div>
      </li>
      <Modal open={modalOpen} title={name} onClose={() => setModalOpen(false)}>
        <CharacterInfo id={id} />
      </Modal>
    </>
  );
}
