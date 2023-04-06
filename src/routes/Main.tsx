import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import { AllCharacters, Character } from '../types';
import CharacterCards from '../components/CharacterCards/CharacterCards';
import Loader from '../components/Loader/Loader';

export default function Main() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (value: string) => {
    findCharacters(value);
  };

  const findCharacters = async (query?: string) => {
    try {
      setIsLoading(true);
      const result = await fetchAllCharacters(query);
      setCharacters(result?.results || []);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    findCharacters();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} data-testid="home-page">
      <SearchBar onSubmit={handleSubmit} />
      <Loader visible={isLoading} />
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
