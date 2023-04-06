import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import FormCards from './FormCards';
import { MOCK_PROPERTIES } from '../../assets/mocks';

describe('<FormCards> component', () => {
  const data = MOCK_PROPERTIES;

  test('Shoud render', () => {
    render(<FormCards data={data} />);
  });

  test('Shoud render UL list', () => {
    const { container } = render(<FormCards data={data} />);
    expect(container.firstChild?.nodeName.toUpperCase()).toEqual('UL');
  });

  test('Shoud have 2 cards', () => {
    const { container } = render(<FormCards data={data} />);
    expect(container.firstChild?.childNodes.length).toEqual(data.length);
  });
});
