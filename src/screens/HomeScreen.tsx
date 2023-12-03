import React, {useCallback, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
} from 'react-native';
import usePlants from '../hooks/usePlants';
import {Plant} from '../types';
import {useNavigation} from '@react-navigation/native';

function HomeScreen() {
  const {isError, isLoading, plants} = usePlants();
  const navigation = useNavigation();

  const onPlantPress = (plantDetails: Plant) => {
    navigation.navigate('Details', {
      plantDetails,
    });
  };

  const renderPlantItem = useCallback(({item}: {item: Plant}) => {
    const {
      name,
      category,
      price,
      bio,
      fertilizer,
      id,
      image,
      light,
      size,
      water,
    } = item;
    return (
      <Pressable
        onPress={onPlantPress.bind(null, item)}
        style={{
          flex: 1,
        }}>
        <View
          style={{
            marginTop: 30,
            marginRight: 100,
            padding: 24,
            borderRadius: 30,
            backgroundColor: '#9CE5CB',
            marginBottom: 20,
            marginHorizontal: 19,
          }}>
          <Text
            style={{
              color: '#002140',
              fontSize: 14,
              fontWeight: '600',
            }}>
            {category}
          </Text>
          <Text
            style={{
              color: '#002140',
              fontSize: 32,
              fontWeight: '700',
              marginTop: 10,
            }}>
            {name}
          </Text>
          <Text
            style={{
              color: '#002140',
              // font-family: Poppins;
              fontSize: 18,
              fontWeight: '600',
              marginTop: 46,
            }}>
            {`$${price}`}
          </Text>
        </View>
        <Image
          source={{uri: image}}
          style={{
            width: 150,
            height: 200,
            position: 'absolute',
            right: 10,
            // top: -30
          }}
        />
      </Pressable>
    );
  }, []);

  if (isError) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>{isError}</Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size={'large'} color={'black'} />
      </View>
    );
  }

  return (
    <FlatList
      data={plants}
      renderItem={renderPlantItem}
      keyExtractor={item => '' + item.id}
      contentContainerStyle={{
        backgroundColor: 'white',
      }}
    />
  );
}

export default HomeScreen;
