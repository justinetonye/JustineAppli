import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import HomeResults from '../../screens/home/HomeResults';
import ResultsList from '../../screens/Results/ResultsList';
import Result from '../../screens/Results/Result';

const Stack = createStackNavigator();

const ResultsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ResultsList" component={ResultsList} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  );
};

export {ResultsStack};
