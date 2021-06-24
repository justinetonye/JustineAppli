import React from 'react';
import {StyleSheet} from 'react-native';
import StartButton from '../../components/buttons/StartButton';
import HomeLayout from './HomeLayout';

const Home = ({navigation}) => {
  return (
    <HomeLayout>
      <StartButton onPress={() => navigation.navigate('HomeResults')} />
    </HomeLayout>
  );
};

export default Home;
