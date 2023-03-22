import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('<NavigationLink> component', () => {
  test('Shoud render nav link', () => {
    const title = 'Test Title';
    render(
      <BrowserRouter>
        <Header title={title} />
      </BrowserRouter>
    );
    expect(screen.getByText(title)).toBeDefined();
  });
});
