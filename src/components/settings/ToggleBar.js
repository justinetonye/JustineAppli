import React from 'react';
import {useState} from 'react';
import {Text, View, Switch, StyleSheet} from 'react-native';

const ToggleBar = () => {
  // Declaring the state of the toggle button
  const [isEnabled, setIsEnabled] = useState(false);

  // Enabling the switch button when clicked
  const toggleSwitch = () => setIsEnabled(prev => !prev);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mésures automatiques</Text>
      <Switch
        trackColor={{false: '#767577', true: 'red'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
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
