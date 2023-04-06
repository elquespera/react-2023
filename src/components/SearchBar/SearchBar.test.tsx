import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('<SearchBar> component', () => {
  test('Shoud render', () => {
    render(<SearchBar />);
    expect(screen.getByPlaceholderText('Search by name')).toBeDefined();
  });
});
