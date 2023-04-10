import { AllCharacters, Character } from '../types';
import fetch from 'cross-fetch';

export async function fetchAllCharacters(query?: string): Promise<AllCharacters | undefined> {
  let url = 'https://rickandmortyapi.com/api/character';
  if (query) url += `?name=${query}`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data: AllCharacters = await response.json();
      return data;
    } else {
      throw new Error();
    }
  } catch (error) {
    throw error;
  }
}

export async function fetchCharacter(id: number): Promise<Character | undefined> {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data: Character = await response.json();
      return data;
    } else {
      throw new Error();
    }
  } catch (error) {
    throw error;
  }
}
