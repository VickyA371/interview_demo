import React, { useEffect } from 'react';
import {View, Text} from 'react-native';
import usePlants from '../hooks/usePlants';

function HomeScreen() {
  const {
    isError,
    isLoading,
    plants
  } = usePlants();

  useEffect(() => {
    console.log('plants : ', plants)
  }, [plants])

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default HomeScreen;

