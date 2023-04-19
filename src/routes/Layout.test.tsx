import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { renderWithProviders } from '../lib/test-utils';
import AboutUs from './AboutUs';
import AddProperty from './AddProperty';
import Route404 from './Route404';

describe('<Input> component', () => {
  test('Shoud render Home Page', () => {
    renderWithProviders(<AboutUs />);
    expect(screen.getByText('About Us')).toBeDefined();
  });

  test('Shoud render Home Page', () => {
    renderWithProviders(<AddProperty />);
    expect(screen.getByText('Add new property')).toBeDefined();
  });

  test('Shoud render Home Page', () => {
    renderWithProviders(<Route404 />);
    expect(screen.getByText('404: Not Found')).toBeDefined();
  });
});
