import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RadioButton from '../../components/radioButtons/RadioButton';
import FrequencySetting from '../../components/settings/FrequencySetting';
import UniqueSetting from '../../components/settings/UniqueSetting';
import Realm from 'realm';
import {useEffect} from 'react';

const EditSettings = () => {
  // Declaring variables
  const [typeMeasure, setTypeMeasure] = useState([
    {id: 1, value: 'unique', name: 'Unique', selected: true},
    {id: 2, value: 'frequency', name: 'Par fréquence', selected: false},
  ]);

  // initialize the data structure (Schema)

  const typeOfMeasuresSchema = {
    name: 'TypeOfMeasures',

    properties: {
      _id: 'int',
      idChanged: 'int',
      selected: 'bool',
    },
    primaryKey: '_id',
  };
  // Creating an async function for the update

  async function launch() {
    console.log('run');
    // Opening the realm db
    const realm = await Realm.open({
      path: 'myrealm',
      schema: [typeOfMeasuresSchema],
    });
    let selectedValue = typeMeasure.filter(value => value.selected === true);

    // Updating the property

    realm.write(() => {
      let typeOfMeasure;

      typeOfMeasure = realm.create(
        'TypeOfMeasures',
        {
          _id: 1,
          idChanged: selectedValue[0].id,
          selected: selectedValue[0].selected,
        },
        'modified',
      );

      let storedValue = [
        {id: 1, value: 'unique', name: 'Unique', selected: true},
        {id: 2, value: 'frequency', name: 'Par fréquence', selected: false},
      ].map(typeItem =>
        typeItem.id === typeOfMeasure.idChanged
          ? {...typeItem, selected: true}
          : {...typeItem, selected: false},
      );
      //setTypeMeasure([...storedValue]);
    });

    // Remember to close the realm
    realm.close();
  }

  //   Handling the click action
  const onRadioBtnClick = item => {
    let updatedState = typeMeasure.map(typeItem =>
      typeItem.id === item.id
        ? {...typeItem, selected: true}
        : {...typeItem, selected: false},
    );
    setTypeMeasure(updatedState);
  };

  // Onload of the app

  useEffect(() => {
    launch().catch(error => {
      console.log('There is an error ' + error);
    });
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Type de Mésures</Text>
      <View style={styles.btnGroup}>
        {typeMeasure.map(item => (
          <RadioButton
            onPress={() => onRadioBtnClick(item)}
            selected={item.selected}
            key={item.id}>
            {item.name}
          </RadioButton>
        ))}
      </View>
      {typeMeasure[0].selected ? <UniqueSetting /> : <FrequencySetting />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
  title: {
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 15,
  },
  btnGroup: {
    marginTop: 10,
    flexDirection: 'row',
    marginBottom: 20,
  },
});

export default EditSettings;
