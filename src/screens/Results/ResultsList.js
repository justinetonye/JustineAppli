import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Result from './Result';

const ResultsList = () => {
  return (
    <View style={styles.center}>
      <Text> This is the results list </Text>
      <Result />
      <Result />
      <Result />
      <Result />
      <Result />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ResultsList;
