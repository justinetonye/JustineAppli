import React from 'react';
import {Text, View, Switch, StyleSheet} from 'react-native';

const ToggleBar = ({isEnabled, setIsEnabled}) => {
  return (
    <View>
      <Switch
        trackColor={{false: '#767577', true: 'red'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => setIsEnabled(prev => !prev)}
        value={isEnabled}
      />
    </View>
  );
};

export default ToggleBar;
