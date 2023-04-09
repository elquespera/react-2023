import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Card from './CharacterCard';
import { MOCK_CHARACTERS } from '../../assets/mocks';

describe('<Card> component', () => {
  const data = MOCK_CHARACTERS[0];

  test('Shoud have name', () => {
    render(<Card id={data.id} name={data.name} image={data.image} />);
    expect(screen.getByText(data.name)).toBeDefined();
  });

  test('Shoud open modal on Click', () => {
    render(<Card id={data.id} name={data.name} image={data.image} />);
    const card = screen.getByText(data.name);
    fireEvent.click(card);
    expect(screen.findByText(data.species));
  });
});
