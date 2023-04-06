import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './CharacterCard';
import { MOCK_CHARACTERS } from '../../assets/mocks';

describe('<Card> component', () => {
  const cardData = MOCK_CHARACTERS[0];

  test('Shoud have name', () => {
    render(<Card data={cardData} />);
    expect(screen.getByText(cardData.name)).toBeDefined();
  });
});
