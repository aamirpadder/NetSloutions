import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MovieDetails from '../screens/details/MovieDetails';
import {MoviesFeeds} from '../screens/home/home';

import {colors} from '../utils/constants';

const Stack = createNativeStackNavigator();
export const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: colors.APP_COLOR},
          headerTitleStyle: {color: colors.WHITE_COLOR},
          headerBackTitleVisible:false
        }}>
        <Stack.Screen name="MoviesFeeds" component={MoviesFeeds} />
        <Stack.Screen name="Details" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
