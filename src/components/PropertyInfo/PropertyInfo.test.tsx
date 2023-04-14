import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MOCK_PROPERTIES } from '../../assets/mocks';
import PropertyInfo from './PropertyInfo';

const [data] = MOCK_PROPERTIES;

describe('<PropertyInfo> component', () => {
  test('Shoud have title', () => {
    render(<PropertyInfo data={data} />);
    expect(screen.getByText(`Price: $${data.price}`)).toBeDefined();
  });
});
