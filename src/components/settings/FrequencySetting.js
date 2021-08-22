import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PrimaryButton from '../buttons/PrimaryButton';
import CardLayout from '../card/CardLayout';
import CardItem from './CardItem';
import {Picker} from '@react-native-picker/picker';

const FrequencySetting = () => {
  // Modal states
  const [visibleDD, setVisibleDD] = useState(false);
  const [visibleDF, setVisibleDF] = useState(false);

  const [dateDebut, setDateDebut] = useState(new Date());

  const [dateDeFin, setDateDeFin] = useState(new Date());

  const toggleModalDD = () => {
    setVisibleDD(!visibleDD);
  };

  const toggleModalDF = () => {
    setVisibleDF(!visibleDF);
  };

  //   Picker's states

  const [selected, setSelected] = useState('h');

  const data = [
    {label: '30min', value: '30min'},
    {label: '1h:00', value: '1h:00'},
    {label: '1h:30', value: '1h:30'},
    {label: '2h:00', value: '2h:00'},
    {label: '2h:00', value: '2h:00'},
  ];
  return (
    <View>
      <CardLayout>
        {/* Date de début */}
        <CardItem
          name="Date de début"
          value={
            <View>
              <TouchableOpacity onPress={() => toggleModalDD()}>
                <Text style={styles.textAction}>
                  {dateDebut
                    ? ` ${dateDebut.getDate()} - ${dateDebut.getMonth()} - ${dateDebut.getFullYear()}, ${dateDebut.getHours()}h : ${dateDebut.getMinutes()}min`
                    : 'choisir'}
                </Text>
              </TouchableOpacity>
              <View style={styles.dateModal}></View>
            </View>
          }
        />
        {/* Date de fin */}
        <CardItem
          name="Date de fin"
          value={
            <View>
              <TouchableOpacity onPress={() => toggleModalDF()}>
                <Text style={styles.textAction}>
                  {dateDeFin
                    ? ` ${dateDeFin.getDate()} - ${dateDeFin.getMonth()} - ${dateDeFin.getFullYear()}, ${dateDeFin.getHours()}h : ${dateDeFin.getMinutes()}min`
                    : 'choisir'}
                </Text>
              </TouchableOpacity>
              <View style={styles.dateModal}>/></View>
            </View>
          }
        />

        {/* Fréquence de prise */}
        <CardItem
          name="Fréquence de prise"
          value={
            <View>
              <TouchableOpacity>
                <Text style={styles.textAction}>
                  <Picker
                    selectedValue={selected}
                    mode={'dropdown'}
                    style={styles.picker}
                    onValueChange={value => setSelected(value)}>
                    <Picker.Item label="hello" value="hello" />
                    <Picker.Item label="hell" value="hello1" />
                  </Picker>
                </Text>
              </TouchableOpacity>
            </View>
          }
        />
      </CardLayout>

      {/* Save button */}
      <View style={styles.saveButton}>
        <PrimaryButton title="Sauvegarder" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textAction: {
    color: 'red',
  },
  dateModal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButton: {
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  picker: {
    width: 200,
    height: 50,
    color: 'red',
  },
});
export default FrequencySetting;
