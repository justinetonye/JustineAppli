import React from 'react';
import ResetButton from '../../components/buttons/ResetButton';
import Card from '../../components/card/Card';
import Layout from '../../components/layout/Layout';
import HomeLayout from './HomeLayout';

const HomeResults = () => {
  return (
    <HomeLayout>
      <Layout>
      <Card latency="306" jitter="104" packetLoss="23" upload="10" download="13" operator="MTN" date="27/06/2021"/>
      <ResetButton />
    </Layout>
    </HomeLayout>
    
  );
  
};

export default HomeResults;


