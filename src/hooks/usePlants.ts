import {useCallback, useEffect, useState} from 'react';
import {Plant} from '../types';

const usePlants = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const data = await fetch(
        'https://create.blinkapi.io/api/eSphKNzwb9EJBt6GBjKx7Q',
      );
      setLoading(false);
      if (data.ok) {
        const jsonData = await data.json();
        setPlants(jsonData);
      } else {
        throw new Error('Something went wrong');
      }
    } catch (err: any) {
      setLoading(false);
      setError(err?.message);
      console.log('Error : ', err?.message);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    plants,
    isLoading,
    isError,
  };
};

export default usePlants;
