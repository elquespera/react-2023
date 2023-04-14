import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Cards from './Cards';
import { MOCK_PROPERTIES } from '../../assets/mocks';

describe('<Cards> component', () => {
  const data = MOCK_PROPERTIES;
  test('Shoud render', () => {
    render(<Cards data={data} />);
  });
  test('Shoud render UL list', () => {
    const { container } = render(<Cards data={data} />);
    expect(container.firstChild?.nodeName.toUpperCase()).toEqual('UL');
  });
  test('Shoud have 2 cards', () => {
    const { container } = render(<Cards data={data} />);
    expect(container.firstChild?.childNodes.length).toEqual(data.length);
  });
});
