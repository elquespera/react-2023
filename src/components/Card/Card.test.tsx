import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import { PropertyData } from '../../types';

describe('<Card> component', () => {
  const cardData: PropertyData = {
    id: 0,
    title: 'title',
    address: 'address',
    rooms: '4',
    price: 200000,
    purpose: 'sale',
    availableFrom: Date.now(),
  };

  test('Shoud have title', () => {
    render(<Card data={cardData} />);
    expect(screen.getByText(cardData.title)).toBeDefined();
  });

  test('Shoud have address', () => {
    render(<Card data={cardData} />);
    expect(screen.getByText(cardData.address)).toBeDefined();
  });

  test('Shoud have price', () => {
    render(<Card data={cardData} />);
    expect(screen.getByText(`$${cardData.price}`)).toBeDefined();
  });
});
