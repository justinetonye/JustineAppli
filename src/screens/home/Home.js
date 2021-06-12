import React from 'react';
import {StyleSheet} from 'react-native';
import StartButton from '../../components/buttons/StartButton';
import Layout from './Layout';

const Home = ({navigation}) => {
  return (
    <Layout>
      <StartButton onPress={() => navigation.navigate('HomeResults')} />
    </Layout>
  );
};

export default Home;
