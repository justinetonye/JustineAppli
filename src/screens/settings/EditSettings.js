import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ToggleBar from '../../components/settings/ToggleBar';
import FrequencySetting from '../../components/settings/FrequencySetting';
import UniqueSetting from '../../components/settings/UniqueSetting';
import Realm from 'realm';
import {useEffect} from 'react';

const EditSettings = ({navigation}) => {
  // Declaring the state of the toggle button
  const [isOn, setIsOn] = useState();

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
        {_id: 1, value: isOn},
        'modified',
      );
      setIsOn(settingsValue.value);
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
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Type de mésures automatique</Text>
      <View style={styles.titleGroup}>
        <Text style={styles.title}>Prise Unique</Text>
        <ToggleBar isEnabled={isOn} setIsEnabled={setIsOn} />
        <Text style={styles.title}>Par fréquence</Text>
      </View>
      {isOn ? <FrequencySetting /> : <UniqueSetting />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
  mainTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  titleGroup: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 30,
  },
});

export default EditSettings;
