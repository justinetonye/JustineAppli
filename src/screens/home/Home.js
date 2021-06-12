import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import StartButton from '../../components/buttons/StartButton';

const Home = ({navigation}) => {
  return (
    <View style={styles.layout}>
      <Text style={styles.text}> CAMTEL </Text>
      <StartButton onPress={() => navigation.navigate('HomeResults')} />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 100,
  },
  text: {
    fontWeight: '800',
    fontSize: 25,
  },
});
export default Home;
