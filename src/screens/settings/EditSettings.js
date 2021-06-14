import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RadioButton from '../../components/radioButtons/RadioButton';

const EditSettings = () => {
  // Declaring variables
  const [typeMeasure, setTypeMeasure] = useState([
    {id: 1, value: 'unique', name: 'Unique', selected: true},
    {id: 2, value: 'frequency', name: 'Frequency', selected: false},
  ]);

  //   Handling the click action
  const onRadioBtnClick = item => {
    let updatedState = typeMeasure.map(typeItem =>
      typeItem.id === item.id
        ? {...typeItem, selected: true}
        : {...typeItem, selected: false},
    );
    setTypeMeasure(updatedState);
  };
  console.log(typeMeasure);

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
  },
});

export default EditSettings;
