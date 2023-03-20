import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import { PropertyData } from '../../types';

describe('<Card> component', () => {
  const cardData: PropertyData = {
    description: 'description',
    address: 'address',
    id: 0,
    price: 200000,
    dateAdded: Date.now(),
  };

  test('Shoud have description', () => {
    render(<Card data={cardData} />);
    expect(screen.getByText(cardData.description)).toBeDefined();
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
