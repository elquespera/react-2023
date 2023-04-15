import { useState } from 'react';
import Modal from '../Modal/Modal';
import PropertyInfo from '../PropertyInfo/PropertyInfo';
import styles from './Card.module.scss';

interface CardProps {
  id: string | number;
  title?: string;
  image?: string;
}

export default function CharacterCard({ id, title, image }: CardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <li className={styles.card} onClick={() => setModalOpen(true)}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={image} alt={title} />
        </div>
        <div className={styles.title}>{title}</div>
      </li>
      <Modal open={modalOpen} title={title} onClose={() => setModalOpen(false)}>
        {modalOpen && id && <PropertyInfo id={id} />}
      </Modal>
    </>
  );
}
