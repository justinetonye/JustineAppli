import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CardItem from './cardItem';
import CardLayout from './CardLayout';

const Card = ({latency,jitter, packetLoss, upload,download,operator, temps}) => {
  return (
    <CardLayout>
      <View style={styles.header}>
        <Text>{operator}</Text>
        <Text>{temps}</Text>
      </View>

      <View style={styles.values}>
        <CardItem title="Latence" value={`${latency}ms`} />
        <CardItem title="gigue" value={`${jitter}ms`} />
        <CardItem title="packetLoss" value={`${packetLoss}%`} />
        <CardItem title="upload" value={`${upload}Mbps`} />
        <CardItem title="download" value={`${download}Mbps`} />
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
    //justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Card;
