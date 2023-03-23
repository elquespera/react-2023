import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import SnackBar from './SnackBar';

describe('<SnackBar> component', () => {
  const title = 'Snackbar title';
  test('Shoud render and have title', () => {
    render(<SnackBar title={title} />);
    expect(screen.getByText(title)).toBeDefined();
  });

  test('Shoud not render without title', () => {
    const { container } = render(<SnackBar />);
    expect(container.firstChild).toBeNull();
  });
});
