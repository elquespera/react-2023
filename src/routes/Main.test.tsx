import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import App from '../App';
import { renderWithProviders } from '../lib/test-utils';
import Main from './Main';
import { StaticRouter } from 'react-router-dom/server';

describe('<Main> component', () => {
  test('Shoud render App component', async () => {
    render(
      <StaticRouter location={'/'}>
        <App />
      </StaticRouter>
    );
    expect(screen.getByTestId('home-page')).toBeDefined();
  });

  test('Shoud render Main component', async () => {
    renderWithProviders(<Main />);
    expect(screen.getByTestId('home-page')).toBeDefined();
  });
});
