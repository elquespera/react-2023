import { describe, expect, test } from 'vitest';
import { renderWithProviders } from '../../lib/test-utils';
import FormCards from './FormCards';

describe('<FormCards> component', () => {
  test('Shoud render', () => {
    renderWithProviders(<FormCards />);
  });

  test('Shoud render UL list', () => {
    const { container } = renderWithProviders(<FormCards />);
    expect(container.firstChild?.nodeName.toUpperCase()).toEqual('UL');
  });

  test('Shoud have 2 cards', () => {
    // const { container } = render(<FormCards />);
    // expect(container.firstChild?.childNodes.length).toEqual(data.length);
  });
});
