import { useEffect, useState } from 'react';
import CharacterCards from '../components/Cards/Cards';
import Loader from '../components/Loader/Loader';
import SearchBar from '../components/SearchBar/SearchBar';
import SnackBar from '../components/SnackBar/SnackBar';
import { useGetAllPropertiesQuery } from '../services/properties';
import { useAppSelector } from '../store/hooks';
import { selectSearchQuery } from '../store/search';

export default function Main() {
  const [errorMsg, setErrorMsg] = useState<string>();
  const { query } = useAppSelector(selectSearchQuery);
  const { data: properties, isFetching, error } = useGetAllPropertiesQuery(query);

  useEffect(() => {
    if (error) {
      setErrorMsg('There was an error while fetching properties');
    } else {
      if (!isFetching && properties?.length === 0) {
        setErrorMsg('No properties were found for your request');
      } else {
        setErrorMsg(undefined);
      }
    }
  }, [error, isFetching, properties]);

  return (
    <>
      <div
        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        data-testid="home-page"
      >
        <SearchBar />
        <Loader visible={isFetching} />
        {properties && <CharacterCards data={properties} />}
      </div>
      <SnackBar error title={errorMsg} onClose={() => setErrorMsg(undefined)} />
    </>
  );
}
