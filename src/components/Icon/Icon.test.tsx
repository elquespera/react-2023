import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Icon from './Icon';

describe('<Icon> component', () => {
  test('Shoud render and have SVG inside', () => {
    const { container } = render(<Icon type="add" />);
    expect(container.firstChild?.firstChild?.nodeName.toUpperCase()).toEqual('SVG');
  });
});
