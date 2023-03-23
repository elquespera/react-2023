import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import PropertyForm from './PropertyForm';

describe('<PropertyForm> component', () => {
  test('Shoud render and have title', () => {
    render(<PropertyForm />);
    expect(screen.getByText('Title')).toBeDefined();
  });
});
