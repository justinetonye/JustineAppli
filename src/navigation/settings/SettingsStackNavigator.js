import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Settings from '../../screens/settings/Settings';

const Stack = createStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export {SettingsStack};
