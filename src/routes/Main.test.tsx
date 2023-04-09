import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Main from './Main';

global.fetch = vi.fn();

describe('<Main> component', () => {
  const testId = 'home-page';

  test('Shoud render Main component', () => {
    render(<Main />);
    expect(screen.getByTestId(testId)).toBeDefined();
  });
});
