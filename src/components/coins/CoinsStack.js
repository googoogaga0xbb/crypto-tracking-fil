import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CoinsScreen from './CoinsScreen';
import CoinDetailsScreen from '../coinDetail/CoinDetailsScreen';
import Colors from 'cryptoTracker/src/res/colors';

const Stack = createStackNavigator();

const CoinsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.blackPearl},
        headerTintColor: Colors.white,
        shadowOpacity: 0,
        shadowColor: Colors.blackPearl,
      }}>
      <Stack.Screen name="Coins" component={CoinsScreen} />
      <Stack.Screen name="CoinDetails" component={CoinDetailsScreen} />
    </Stack.Navigator>
  );
};

export default CoinsStack;
