import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import FormCards from './FormCards';

describe('<FormCards> component', () => {
  test('Shoud render', () => {
    render(<FormCards />);
  });

  test('Shoud render UL list', () => {
    const { container } = render(<FormCards />);
    expect(container.firstChild?.nodeName.toUpperCase()).toEqual('UL');
  });

  test('Shoud have 2 cards', () => {
    // const { container } = render(<FormCards />);
    // expect(container.firstChild?.childNodes.length).toEqual(data.length);
  });
});
