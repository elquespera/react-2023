import { describe, expect, test } from 'vitest';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import CharacterInfo from './CharacterInfo';
import { MOCK_CHARACTERS } from '../../assets/mocks';

const data = MOCK_CHARACTERS[0];

describe('<CharacterInfo> component', () => {
  test('Shoud have name', () => {
    render(<CharacterInfo />);
    expect(screen.getByTestId('loader')).toBeDefined();
  });

  test('Shoud have name', async () => {
    render(<CharacterInfo id={data.id} />);
    await waitForElementToBeRemoved(screen.getByTestId('loader'));
    expect(screen.getByText(data.species)).toBeDefined();
  });
});
