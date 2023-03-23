import React from 'react';
import { PropertyData } from '../../types';
import styles from './Card.module.scss';
import convertDate from '../../lib/convertDate';

import placehoderImage from '../../assets/images/placeholder.svg';

interface CardProps {
  data: PropertyData;
}

export default class Card extends React.Component<CardProps> {
  constructor(props: CardProps) {
    super(props);
  }
  render() {
    const { title, address, price, availableFrom, rooms, purpose, image } = this.props.data;
    return (
      <li className={styles.card}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={image || placehoderImage} alt={title} />
        </div>
        <span className={styles.purpose}>{purpose}</span>
        <span className={styles.price}>${price}</span>
        <div className={styles.body}>
          <h3 className={styles.title}>{title}</h3>
          <span>{address}</span>
          <span>{`Rooms: ${rooms}`}</span>
          <span className={styles.date}>{`Available from ${convertDate(availableFrom)}`}</span>
        </div>
      </li>
    );
  }
}
