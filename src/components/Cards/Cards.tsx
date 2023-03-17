import React from 'react';
import { CARDS } from '../../assets/cards';
import Card from '../Card/Card';
import styles from './Cards.module.scss';

interface CardsProps {
  count?: number;
}

export default class Cards extends React.Component<CardsProps> {
  constructor(props: CardsProps) {
    super(props);
  }

  render() {
    return (
      <ul className={styles.cards}>
        {CARDS.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </ul>
    );
  }
}
