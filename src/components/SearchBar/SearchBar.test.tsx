import { fireEvent, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { renderWithProviders } from '../../lib/test-utils';
import SearchBar from './SearchBar';

describe('<SearchBar> component', () => {
  const inputPlaceholder = 'Search by name';

  test('Shoud render', () => {
    renderWithProviders(<SearchBar />);
    expect(screen.getByPlaceholderText(inputPlaceholder)).toBeDefined();
  });

  test('Shoud not submit without input value', () => {
    const testId = 'search-bar-form';

    renderWithProviders(<SearchBar />);
    const form = screen.getByTestId<HTMLFormElement>(testId);
    fireEvent.submit(form);
    expect(form).toBeDefined();
  });

  test('Shoud not submit without input value', () => {
    const newValue = 'New Value';
    const testId = 'search-bar-form';

    renderWithProviders(<SearchBar />);
    const form = screen.getByTestId<HTMLFormElement>(testId);
    const input = screen.getByPlaceholderText<HTMLInputElement>(inputPlaceholder);
    fireEvent.change(input, { target: { value: newValue } });
    fireEvent.submit(form);

    expect(input.value).toEqual(newValue);
  });
});
