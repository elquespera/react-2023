import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import App from '../App';
import { renderWithProviders } from '../lib/test-utils';
import Main from './Main';

describe('<Main> component', () => {
  test('Shoud render App component', async () => {
    renderWithProviders(<App />);
    expect(screen.getByTestId('home-page')).toBeDefined();
  });

  test('Shoud render Main component', async () => {
    renderWithProviders(<Main />);
    expect(screen.getByTestId('home-page')).toBeDefined();
  });
});
