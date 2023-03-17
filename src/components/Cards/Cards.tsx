import React from 'react';
import { CARDS } from '../../assets/cards';
import Card from '../Card/Card';

interface CardsProps {
  count?: number;
}

export default class Cards extends React.Component<CardsProps> {
  constructor(props: CardsProps) {
    super(props);
  }

  render() {
    return (
      <ul>
        {CARDS.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </ul>
    );
  }
}
