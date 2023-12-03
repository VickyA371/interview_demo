import React from 'react';
import {View, Text} from 'react-native';
import {Plant} from '../types';
import Animated from 'react-native-reanimated';

function DetailsScreen(props: any) {
  const details: Plant = props.route.params?.plantDetails;
  const {category, image, name, price, id} = details;

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          // flex: 1,
          backgroundColor: '#9CE5CB',
          padding: 12,
          paddingStart: 36,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // marginLeft: 36,
          }}>
          <Text
            style={{
              color: '#002140',
              // font-family: Poppins;
              fontSize: 14,
              // font-style: normal;
              fontWeight: '600',
              // line-height: normal;
            }}>
            {category}
          </Text>
          {/* <View>
            <Text>{"4."}</Text>
          </View> */}
        </View>
        <Text
          style={{
            color: '#002140',
            // font-family: Philosopher;
            fontSize: 38,
            // font-style: normal;
            fontWeight: '700',
            // marginLeft: 36,
            marginTop: 10,
            // line-height: 124%;
          }}>
          {name}
        </Text>
        <Text
          style={{
            color: '#002140',
            // font-family: Poppins;
            fontSize: 12,
            // font-style: normal;
            fontWeight: '600',
            // line-height: normal;
            // text-transform: uppercase;
            marginTop: 34,
          }}>
          {'PRICE'}
        </Text>
        <Text>{price}</Text>
        <Animated.Image
          sharedTransitionTag={`img-${id}`}
          source={{uri: image}}
          style={{
            width: 150,
            height: 200,
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}
        />
      </View>
    </View>
  );
}

export default DetailsScreen;
