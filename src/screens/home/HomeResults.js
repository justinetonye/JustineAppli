import React from 'react';
import ResetButton from '../../components/buttons/ResetButton';
import Card from '../../components/card/Card';
import Layout from '../../components/layout/Layout';
import HomeLayout from './HomeLayout';
import {View, StyleSheet} from 'react-native';

const HomeResults = () => {
  return (
    <HomeLayout>
      <Layout>
        <Card
          latency="306"
          jitter="104"
          packetLoss="23"
          upload="10"
          download="13"
          operator="MTN"
          temps="19h:00"
        />
        <View style={styles.resetButton}>
          <ResetButton />
        </View>
      </Layout>
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  resetButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
});
export default HomeResults;
