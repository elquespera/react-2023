import { describe, expect, test } from 'vitest';
import { fetchAllCharacters } from './fetchCharacters';

describe('Fetch characters', () => {
  test('Shoud fetch all characters', async () => {
    const characters = await fetchAllCharacters();
    expect(characters?.info.count).toBeGreaterThan(0);
  });
});
