import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import { MOCK_CARDS } from '../../assets/mocks';

describe('<Card> component', () => {
  const cardData = MOCK_CARDS[0];

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
