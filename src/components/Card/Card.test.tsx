import { fireEvent, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { MOCK_PROPERTIES } from '../../assets/mocks';
import { renderWithProviders } from '../../lib/test-utils';
import Card from './Card';

describe('<Card> component', () => {
  const data = MOCK_PROPERTIES[0];

  test('Shoud have name', () => {
    renderWithProviders(<Card id={data.id} title={data.title} image={data.image} />);
    expect(screen.getByText(data.title)).toBeDefined();
  });

  test('Shoud open modal on Click', () => {
    renderWithProviders(<Card id={data.id} title={data.title} image={data.image} />);
    const card = screen.getByText(data.title);
    fireEvent.click(card);
    expect(screen.getByTestId('modal-portal')).toBeDefined();
  });
});
