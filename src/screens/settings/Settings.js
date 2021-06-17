import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import SettingCard from '../../components/settings/SettingCard';
import ToggleBar from '../../components/settings/ToggleBar';

const Settings = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ToggleBar />
      <SettingCard navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
});

export default Settings;
