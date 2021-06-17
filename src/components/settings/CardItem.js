import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CardItem = ({name, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4,
  },
  name: {
    fontWeight: 'bold',
  },
  value: {
    backgroundColor: '#fbfbfb',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 3,
  },
});

export default CardItem;
