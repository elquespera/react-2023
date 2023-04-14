import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Main from './Main';

describe('<Main> component', () => {
  const testId = 'home-page';

  test('Shoud render Main component', async () => {
    render(<Main />);
    expect(screen.getByTestId(testId)).toBeDefined();
  });
});
