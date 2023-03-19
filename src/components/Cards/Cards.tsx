import React from 'react';
import { PropertyData } from '../../types';
import Card from '../Card/Card';
import styles from './Cards.module.scss';

interface CardsProps {
  data: PropertyData[];
  count?: number;
}

export default class Cards extends React.Component<CardsProps> {
  constructor(props: CardsProps) {
    super(props);
  }

  render() {
    return (
      <ul className={styles.cards}>
        {this.props.data.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </ul>
    );
  }
}
