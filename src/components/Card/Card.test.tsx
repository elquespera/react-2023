import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Card from './Card';
import { MOCK_PROPERTIES } from '../../assets/mocks';

describe('<Card> component', () => {
  const data = MOCK_PROPERTIES[0];

  test('Shoud have name', () => {
    render(<Card id={data.id} title={data.title} image={data.image} />);
    expect(screen.getByText(data.title)).toBeDefined();
  });

  test('Shoud open modal on Click', () => {
    render(<Card id={data.id} title={data.title} image={data.image} />);
    const card = screen.getByText(data.title);
    fireEvent.click(card);
    // expect(screen.findByText(data.species));
  });
});
