import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavigationLink from './NavigationLink';

describe('<NavigationLink> component', () => {
  test('Shoud render nav link', () => {
    const title = 'Test Link';
    render(
      <BrowserRouter>
        <NavigationLink title={title} to="/" />
      </BrowserRouter>
    );
    expect(screen.getByText(title)).toBeDefined();
  });
});
