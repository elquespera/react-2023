import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('<Modal> component', () => {
  const testId = 'modal-portal';

  test('Shoud render portal when open', () => {
    render(<Modal open={true} />);
    expect(screen.getByTestId(testId)).toBeDefined();
  });

  test('Shoud not render portal when not open', () => {
    render(<Modal open={false} />);
    expect(screen.queryByTestId(testId)).toBeNull();
  });

  test('Shoud close on button click', () => {
    const closeBtnId = 'close-button';
    render(<Modal open={true} />);
    const button = screen.getByTestId(closeBtnId);
    fireEvent.click(button);
    expect(screen.queryByTestId('modal-portal')).toBeDefined();
  });

  test('Shoud close on button click', () => {
    render(<Modal open={true} />);
    const wrapper = screen.getByTestId(testId);
    fireEvent.keyDown(wrapper, {});
    expect(screen.queryByTestId('modal-portal')).toBeDefined();
  });
});
