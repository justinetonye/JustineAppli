import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import SettingCard from '../../components/settings/SettingCard';
import ToggleBar from '../../components/settings/ToggleBar';
import Layout from '../../components/layout/Layout';

const Settings = ({navigation}) => {
  return (
    <Layout >
      <ToggleBar />
      <SettingCard navigation={navigation} />
    </Layout>
  );
};



export default Settings;
