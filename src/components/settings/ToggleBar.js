import React from 'react';
import {Text, View, Switch, StyleSheet} from 'react-native';

const ToggleBar = ({isEnabled, setIsEnabled}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mésures automatiques</Text>
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

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ToggleBar;
