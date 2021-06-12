import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const StartButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>LANCER</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'red',
    padding: 20,
    width: 180,
    height: 180,
  },
  text: {
    fontWeight: '800',
    color: 'white',
  },
});
export default StartButton;
