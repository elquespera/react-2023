import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { MOCK_PROPERTIES } from '../../assets/mocks';
import { renderWithProviders } from '../../lib/test-utils';
import PropertyInfo from './PropertyInfo';

const [data] = MOCK_PROPERTIES;

describe('<PropertyInfo> component', () => {
  test('Shoud have title', async () => {
    renderWithProviders(<PropertyInfo id={data.id} />);
    await waitForElementToBeRemoved(screen.getByTestId('loader'));
    expect(screen.getByText(`Price: $${data.price}`)).toBeDefined();
  });
});
