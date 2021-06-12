import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Result = () => {
  return (
    <View style={styles.center}>
      <Text> This is the results a unique result </Text>
      <Button title="Go to a single result" />
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
export default Result;
