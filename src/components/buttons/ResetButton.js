/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ResetButton = ({title}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Ionicons name="refresh" color="white" style={{marginRight: 10}} />
      <Text style={styles.text}>Réinitialiser</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 25,
    paddingVertical: 10,
    width: 145,
    backgroundColor: 'gray',
    marginHorizontal:100,
  },
  text: {
    color: 'white',
  },
});

export default ResetButton;
