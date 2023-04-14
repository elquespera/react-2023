import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import CharacterCards from './Cards';
import { MOCK_CHARACTERS } from '../../assets/mocks';

describe('<CharacterCards> component', () => {
  const data = MOCK_CHARACTERS;
  test('Shoud render', () => {
    render(<CharacterCards data={data} />);
  });
  test('Shoud render UL list', () => {
    const { container } = render(<CharacterCards data={data} />);
    expect(container.firstChild?.nodeName.toUpperCase()).toEqual('UL');
  });
  test('Shoud have 2 cards', () => {
    const { container } = render(<CharacterCards data={data} />);
    expect(container.firstChild?.childNodes.length).toEqual(data.length);
  });
});
