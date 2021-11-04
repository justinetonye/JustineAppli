import React, {useEffect, useState} from 'react';
import SettingCard from '../../components/settings/SettingCard';
import ToggleBar from '../../components/settings/ToggleBar';
import Layout from '../../components/layout/Layout';
//import AsyncStorage from '@react-native-community/async-storage'

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
      <ToggleBar isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
      {isEnabled ? <SettingCard navigation={navigation} /> : null}
    </Layout>
  );
};

export default Settings;
