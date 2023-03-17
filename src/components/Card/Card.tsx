import React from 'react';
import { PropertyData } from '../../types';

interface CardProps {
  data: PropertyData;
}

export default class Card extends React.Component<CardProps> {
  constructor(props: CardProps) {
    super(props);
  }
  render() {
    return <li>Card</li>;
  }
}
