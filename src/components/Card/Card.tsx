import React from 'react';
import { UNSPLASH_URL } from '../../consts';
import { PropertyData } from '../../types';
import styles from './Card.module.scss';
import getRandomNumber from '../../lib/getRandomNumber';
import convertDate from '../../lib/convertDate';

interface CardProps {
  data: PropertyData;
}

export default class Card extends React.Component<CardProps> {
  constructor(props: CardProps) {
    super(props);
  }
  render() {
    const { description, address, price, dateAdded } = this.props.data;
    return (
      <li className={styles.card}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            src={`${UNSPLASH_URL}&sig=${getRandomNumber(200)}`}
            alt={description}
          />
        </div>
        <span className={styles.price}>${price}</span>
        <div className={styles.body}>
          <h3 className={styles.description}>{description}</h3>
          <span className={styles.address}>{address}</span>
          <span className={styles.date}>{`Added on ${convertDate(dateAdded)}`}</span>
        </div>
      </li>
    );
  }
}
