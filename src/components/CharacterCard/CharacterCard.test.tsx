import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Card from './CharacterCard';
import { MOCK_CHARACTERS } from '../../assets/mocks';

describe('<Card> component', () => {
  const cardData = MOCK_CHARACTERS[0];

  test('Shoud have name', () => {
    render(<Card data={cardData} />);
    expect(screen.getByText(cardData.name)).toBeDefined();
  });

  test('Shoud open modal on Click', () => {
    render(<Card data={cardData} />);
    const card = screen.getByText(cardData.name);
    fireEvent.click(card);
    expect(screen.findByText(cardData.species));
  });
});
