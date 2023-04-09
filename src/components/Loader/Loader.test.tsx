import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('<Loader> component', () => {
  const textId = 'loader';
  test('Shoud render invisible', () => {
    render(<Loader />);
    expect(screen.getByTestId(textId)).toBeDefined();
  });

  test('Shoud render visible', () => {
    render(<Loader visible />);
    expect(screen.getByTestId(textId)).toBeDefined();
  });
});
