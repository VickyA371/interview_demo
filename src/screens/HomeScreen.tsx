import React, {useCallback} from 'react';
import {View, Text, ActivityIndicator, FlatList, Pressable} from 'react-native';
import usePlants from '../hooks/usePlants';
import {Plant} from '../types';
import {useNavigation} from '@react-navigation/native';
import Animated from 'react-native-reanimated';

function HomeScreen() {
  const {isError, isLoading, plants} = usePlants();
  const navigation = useNavigation();

  const onPlantPress = useCallback(
    (plantDetails: Plant) => {
      navigation.navigate('Details', {
        plantDetails,
      });
    },
    [navigation],
  );

  const renderPlantItem = useCallback(
    ({item}: {item: Plant}) => {
      const {name, category, price, image, id} = item;
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
          <Animated.Image
            sharedTransitionTag={`img-${id}`}
            source={{uri: image}}
            style={{
              width: 150,
              height: 200,
              position: 'absolute',
              right: 10,
              top: -30,
            }}
          />
        </Pressable>
      );
    },
    [onPlantPress],
  );

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
    <Animated.View style={{flex: 1}}>
      <FlatList
        data={plants}
        renderItem={renderPlantItem}
        keyExtractor={item => '' + item.id}
        contentContainerStyle={{
          backgroundColor: 'white',
        }}
      />
    </Animated.View>
  );
}

export default HomeScreen;
