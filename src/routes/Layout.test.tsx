import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ROUTES } from '.';
import Layout from './Layout';
import AboutUs from './AboutUs';

describe('<Input> component', () => {
  test('Shoud render Home Page', () => {
    const route = ROUTES[0];
    const Page = route.page;
    render(<Layout title={route.title} page={<Page />} testId={route.testId} />);
    expect(screen.getByTestId(route.testId || '')).toBeDefined();
  });

  test('Shoud render Home Page', () => {
    const route = ROUTES[1];
    const Page = route.page;
    render(<Layout title={route.title} page={<Page />} testId={route.testId} />);
    expect(screen.getByTestId(route.testId || '')).toBeDefined();
  });

  test('Shoud render Home Page', () => {
    const route = ROUTES[2];
    const Page = route.page;
    render(<Layout title={route.title} page={<Page />} testId={route.testId} />);
    expect(screen.getByTestId(route.testId || '')).toBeDefined();
  });
});
