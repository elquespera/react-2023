import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import { AllCharacters, Character } from '../types';
import CharacterCards from '../components/CharacterCards/CharacterCards';

export default function Main() {
  const [characters, setCharacters] = useState<Character[]>([]);

  const handleSubmit = (value: string) => {
    findCharacters(value);
  };

  const findCharacters = async (query?: string) => {
    const result = await fetchAllCharacters(query);
    setCharacters(result?.results || []);
  };

  useEffect(() => {
    findCharacters();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} data-testid="home-page">
      <SearchBar onSubmit={handleSubmit} />
      <CharacterCards data={characters} />
    </div>
  );
}

async function fetchAllCharacters(query?: string) {
  let url = 'https://rickandmortyapi.com/api/character';
  if (query) url += `?name=${query}`;
  const response = await fetch(url);
  const data: AllCharacters = await response.json();

  return data;
}
