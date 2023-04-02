import React from 'react';
import { PropertyData } from '../../types';
import Card from '../Card/Card';
import styles from './Cards.module.scss';

interface CardsProps {
  data: PropertyData[];
}

export default function Cards({ data }: CardsProps) {
  return (
    <ul className={styles.cards}>
      {data.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </ul>
  );
}
