import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import PropertyForm from './PropertyForm';

describe('<PropertyForm> component', () => {
  test('Shoud render and have title', () => {
    render(<PropertyForm onSubmit={() => {}} />);
    expect(screen.getByText('Title')).toBeDefined();
  });
});
