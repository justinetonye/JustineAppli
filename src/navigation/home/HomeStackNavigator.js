import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/home/Home';
import HomeResults from '../../screens/home/HomeResults';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HomeResults" component={HomeResults} />
    </Stack.Navigator>
  );
};

export {HomeStack};
