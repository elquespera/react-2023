import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('<Input> component', () => {
  const label = 'Input label';
  const name = 'title';

  test('Shoud render and have label', () => {
    render(<Input name={name} label={label} required errorMsg="Error" />);
    expect(screen.getByText(label)).toBeDefined();
  });

  test('Shoud render select and have label', () => {
    render(<Input name={name} type="select" label={label} options={['1', '2']} />);
    expect(screen.getByText(label)).toBeDefined();
  });

  test('Shoud render radio and have label', () => {
    render(<Input name={name} type="radio" label={label} />);
    expect(screen.getByText(label)).toBeDefined();
  });
});
