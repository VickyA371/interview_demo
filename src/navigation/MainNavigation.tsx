import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import {Image, Pressable, View} from 'react-native';
import assets from '../assets';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

function MainNavigation() {
  const safeAreaInsets = useSafeAreaInsets();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: ({navigation, options, route, back}) => {
            return (
              <View
                style={{
                  paddingTop: safeAreaInsets.top,
                  minHeight: 74,
                  marginHorizontal: 19,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flex: 1,
                    marginTop: 26,
                    marginBottom: 20,
                  }}>
                  <Image
                    source={assets.header_logo}
                    style={{
                      height: 28,
                    }}
                  />
                </View>
                <Pressable
                  onPress={() => {
                    console.log('notification pressed');
                  }}>
                  <Image
                    source={assets.ic_notification}
                    style={{
                      height: 22,
                      width: 22,
                    }}
                  />
                </Pressable>
              </View>
            );
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
