import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('<Input> component', () => {
  const label = 'Input label';

  test('Shoud render and have label', () => {
    render(<Input label={label} required error errorMsg="Error" />);
    expect(screen.getByText(label)).toBeDefined();
  });

  test('Shoud render select and have label', () => {
    render(<Input type="select" label={label} options={['1', '2']} />);
    expect(screen.getByText(label)).toBeDefined();
  });

  test('Shoud render radio and have label', () => {
    render(<Input type="radio" label={label} />);
    expect(screen.getByText(label)).toBeDefined();
  });

  test('Shoud render type file and have label', () => {
    render(<Input type="file" label={label} />);
    expect(screen.getByText(label)).toBeDefined();
  });
});
