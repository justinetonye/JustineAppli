import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ResetButton from '../../components/buttons/ResetButton';
import Card from '../../components/card/Card';

const HomeResults = () => {
  return (
    <View style={styles.center}>
      <Card />
      <ResetButton />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    marginVertical: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default HomeResults;
