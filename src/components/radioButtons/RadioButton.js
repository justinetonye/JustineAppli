import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const RadioButton = ({onPress, selected, children}) => {
  return (
    <View style={styles.radioButtonContainer}>
      <TouchableOpacity onPress={onPress} style={styles.radioButton}>
        {selected ? <View style={styles.radioButtonIcon} /> : null}
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.radioButtonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 35,
    backgroundColor: '#fbfbfb',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    elevation: 1,
  },
  radioButton: {
    height: 15,
    width: 15,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonIcon: {
    height: 9,
    width: 9,
    borderRadius: 7,
    backgroundColor: 'red',
  },
  radioButtonText: {
    fontSize: 14,
    marginLeft: 16,
  },
});

export default RadioButton;
