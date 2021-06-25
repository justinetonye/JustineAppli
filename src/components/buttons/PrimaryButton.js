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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 25,
    paddingVertical: 10,
    width: 145,
    backgroundColor: 'red',
  },
  text: {
    color: 'white',
  },
});

export default PrimaryButton;
