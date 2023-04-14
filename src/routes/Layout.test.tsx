import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';
import AddProperty from './AddProperty';
import Route404 from './Route404';

describe('<Input> component', () => {
  test('Shoud render Home Page', () => {
    render(<AboutUs />);
    expect(screen.getByText('About Us')).toBeDefined();
  });

  test('Shoud render Home Page', () => {
    render(<AddProperty />);
    expect(screen.getByText('Add new property')).toBeDefined();
  });

  test('Shoud render Home Page', () => {
    render(<Route404 />);
    expect(screen.getByText('404: Not Found')).toBeDefined();
  });
});
