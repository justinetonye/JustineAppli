import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const PrimaryButton = ({title}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'red',
  },
  text: {
    color: 'white',
  },
});

export default PrimaryButton;
