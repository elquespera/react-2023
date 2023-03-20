import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Cards from './Cards';

describe('<Cards> component', () => {
  const data = [
    {
      id: 1,
      price: 250000,
      description: 'Stylish 3-bedroom townhouse with a rooftop deck',
      address: '1234 Smith St, San Francisco, CA 94129',
      dateAdded: new Date('2023-01-02').getTime(),
    },
    {
      id: 2,
      price: 150000,
      description: 'Cozy 2-bedroom apartment in the heart of downtown',
      address: '5678 Market St, San Francisco, CA 94102',
      dateAdded: new Date('2023-01-05').getTime(),
    },
  ];

  test('Shoud render', () => {
    render(<Cards data={data} />);
  });

  test('Shoud render UL list', () => {
    const { container } = render(<Cards data={data} />);
    expect(container.firstChild?.nodeName.toUpperCase()).toEqual('UL');
  });

  test('Shoud have 2 cards', () => {
    const { container } = render(<Cards data={data} />);
    expect(container.firstChild?.childNodes.length).toEqual(2);
  });
});
