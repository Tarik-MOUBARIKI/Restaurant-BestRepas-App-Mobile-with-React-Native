import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/Home'
import ItemsScreen from './components/Items'
import SelectIngidientScreen from './components/SelectIngridient'
import ShowItemsScreen from './components/Show'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Items" component={ItemsScreen} />
        <Stack.Screen name="SelectIngidient" component={SelectIngidientScreen} />
        <Stack.Screen name="ShowItems" component={ShowItemsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
