import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import { AllCharacters, Character } from '../types';
import CharacterCards from '../components/CharacterCards/CharacterCards';

export default function Main() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const loadCharacters = async () => {
      const result = await fetchAllCharacters();
      setCharacters(result.results);
    };

    loadCharacters();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} data-testid="home-page">
      <SearchBar />
      <CharacterCards data={characters} />
    </div>
  );
}

async function fetchAllCharacters() {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data: AllCharacters = await response.json();

  return data;
}
