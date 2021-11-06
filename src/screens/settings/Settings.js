import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SettingCard from '../../components/settings/SettingCard';
import ToggleBar from '../../components/settings/ToggleBar';
import Layout from '../../components/layout/Layout';

import Realm from 'realm';

const Settings = ({navigation}) => {
  // Declaring the state of the toggle button
  const [isEnabled, setIsEnabled] = useState();

  // initialize the data structure (Schema)
  const enabledSettingsSchema = {
    name: 'EnabledSettings',
    properties: {
      _id: 'int',
      value: 'bool',
    },
    primaryKey: '_id',
  };

  // Creating an async function for the update

  async function launch() {
    // Opening the realm db
    const realm = await Realm.open({
      path: 'myrealm',
      schema: [enabledSettingsSchema],
    });

    // Updating the property

    realm.write(() => {
      let settingsValue;

      settingsValue = realm.create(
        'EnabledSettings',
        {_id: 1, value: isEnabled},
        'modified',
      );
      setIsEnabled(settingsValue.value);
    });

    // Getting value from the realm db

    // Remember to close the realm
    realm.close();
  }

  useEffect(() => {
    launch().catch(error => {
      console.log('There is an error ' + error);
    });
  });

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Mésures automatiques</Text>
        <ToggleBar isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
      </View>
      {isEnabled ? <SettingCard navigation={navigation} /> : null}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Settings;
