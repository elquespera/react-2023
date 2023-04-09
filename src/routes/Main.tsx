import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import { Character } from '../types';
import CharacterCards from '../components/CharacterCards/CharacterCards';
import Loader from '../components/Loader/Loader';
import { fetchAllCharacters } from '../lib/fetchCharacters';

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
