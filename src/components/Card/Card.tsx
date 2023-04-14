import { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import styles from './Card.module.scss';
import { PropertyData } from '../../types';
import { fetchProperty } from '../../lib/fetchProperties';
import PropertyInfo from '../PropertyInfo/PropertyInfo';
import Loader from '../Loader/Loader';

interface CardProps {
  id?: string | number;
  title?: string;
  image?: string;
}

export default function CharacterCard({ id, title, image }: CardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [property, setProperty] = useState<PropertyData>();

  useEffect(() => {
    const loadProperty = async () => {
      setProperty(undefined);
      if (id) {
        const result = await fetchProperty(id);
        setProperty(result);
      } else {
        setProperty(undefined);
      }
    };

    if (modalOpen) {
      loadProperty();
    }
  }, [modalOpen, id]);

  return (
    <>
      <li className={styles.card} onClick={() => setModalOpen(true)}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={image} alt={title} />
        </div>
        <div className={styles.title}>{title}</div>
      </li>
      <Modal open={modalOpen} title={title} onClose={() => setModalOpen(false)}>
        {property ? <PropertyInfo data={property} /> : <Loader visible />}
      </Modal>
    </>
  );
}
