import React, {useState, useEffect} from 'react';
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
