import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { renderWithProviders } from '../../lib/test-utils';
import PropertyForm from './PropertyForm';

describe('<PropertyForm> component', () => {
  test('Shoud render and have title', () => {
    renderWithProviders(<PropertyForm />);
    expect(screen.getByText('Title')).toBeDefined();
  });
});
