import { useEffect, useState } from 'react';
import CharacterCards from '../components/Cards/Cards';
import Loader from '../components/Loader/Loader';
import SearchBar from '../components/SearchBar/SearchBar';
import SnackBar from '../components/SnackBar/SnackBar';
import { fetchAllProperties } from '../lib/fetchProperties';
import { getLocalStorage } from '../lib/storage';
import { PropertyData } from '../types';

export default function Main() {
  const [properties, setProperties] = useState<PropertyData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string>();

  const handleSubmit = (value: string) => {
    findProperties(value);
  };

  const findProperties = async (query?: string) => {
    try {
      setIsLoading(true);
      const result = await fetchAllProperties(query);
      setProperties(result || []);
      setErrorMsg(undefined);
    } catch {
      setProperties([]);
      setErrorMsg('No properties were found');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const { search } = getLocalStorage();
    findProperties(search);
  }, []);

  return (
    <>
      <div
        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        data-testid="home-page"
      >
        <SearchBar onSubmit={handleSubmit} />
        <Loader visible={isLoading} />
        <CharacterCards data={properties} />
      </div>
      <SnackBar error title={errorMsg} onClose={() => setErrorMsg(undefined)} />
    </>
  );
}
