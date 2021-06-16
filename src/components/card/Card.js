import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CardItem from './cardItem';
import CardLayout from './CardLayout';

const Card = () => {
  return (
    <CardLayout>
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
    </CardLayout>
  );
};

const styles = StyleSheet.create({
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
