import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Settings from '../../screens/settings/Settings';
import EditSettings from '../../screens/settings/EditSettings';

const Stack = createStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="EditSettings" component={EditSettings} />
    </Stack.Navigator>
  );
};

export {SettingsStack};
