import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CardItem = ({title, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  value: {
    marginTop: 5,
    fontSize: 15,
  },
});

export default CardItem;
