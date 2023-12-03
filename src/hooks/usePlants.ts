import {useCallback, useEffect, useState} from 'react';

const usePlants = () => {
  const [plants, setPlants] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const data = await fetch(
        'https://create.blinkapi.io/api/eSphKNzwb9EJBt6GBjKx7Q',
      );
      console.log('data : ', data)
      if (data.ok) {
        const jsonData = await data.json();
        console.log(jsonData);
      } else {
        throw new Error('Something went wrong');
      }
    } catch (err: any) {
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
