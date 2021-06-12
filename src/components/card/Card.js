import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CardItem from './cardItem';

const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text>CAMTEL</Text>
        <Text>07h:00</Text>
      </View>

      <View style={styles.values}>
        <CardItem title="Ping" value="100ms" />
        <CardItem title="Ping" value="100ms" />
        <CardItem title="Ping" value="100ms" />
        <CardItem title="Ping" value="100ms" />
        <CardItem title="Ping" value="100ms" />
        <CardItem title="Ping" value="100ms" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    elevation: 1,
    borderRadius: 3,
    padding: 25,
    width: 350,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    marginHorizontal: 15,
  },
  values: {
    marginTop: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Card;
