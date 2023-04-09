import { AllCharacters, Character } from '../types';

export async function fetchAllCharacters(query?: string) {
  let url = 'https://rickandmortyapi.com/api/character';
  if (query) url += `?name=${query}`;
  const response = await fetch(url);
  const data: AllCharacters = await response.json();

  return data;
}

export async function fetchCharacter(id: number) {
  let url = `https://rickandmortyapi.com/api/character/${id}`;
  const response = await fetch(url);
  const data: Character = await response.json();
  return data;
}
