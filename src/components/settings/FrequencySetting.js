import React, {useState} from 'react';
import {Platform, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PrimaryButton from '../buttons/PrimaryButton';
import CardLayout from '../card/CardLayout';
import CardItem from './CardItem';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const FrequencySetting = () => {
  /* Date de debut settings */

  const [dateDebut, setDateDebut] = useState(new Date());
  const [modeDD, setModeDD] = useState('date');
  const [showDD, setShowDD] = useState(false);
  const onChangeDD = (event, selectedDate) => {
    const currentDate = selectedDate || dateDebut;
    setShowDD(Platform.OS === 'ios');
    setDateDebut(currentDate);
  };

  const showModeDD = currentMode => {
    setModeDD(currentMode);
  };
  const showDatepickerDD = () => {
    showModeDD('date');
    setShowDD(true);
  };

  /* End Date de debut settings */

  /* Date de fin settings */

  const [dateDeFin, setDateDeFin] = useState(new Date());
  const [modeDF, setModeDF] = useState('date');
  const [showDF, setShowDF] = useState(false);
  const onChangeDF = (event, selectedDate) => {
    const currentDate = selectedDate || dateDeFin;
    setShowDF(Platform.OS === 'ios');
    setDateDeFin(currentDate);
  };

  const showModeDF = currentMode => {
    setModeDF(currentMode);
  };
  const showDatepickerDF = () => {
    showModeDF('date');
    setShowDF(true);
  };
  /* End Date de fin settings */

  //   Picker's states

  const [selected, setSelected] = useState('h');

  const data = [
    {id: 1, label: '30min', value: '30min'},
    {id: 2, label: '1h:00', value: '1h:00'},
    {id: 3, label: '1h:30', value: '1h:30'},
    {id: 4, label: '2h:00', value: '2h:00'},
    {id: 5, label: '2h:30', value: '2h:30'},
  ];
  return (
    <View>
      <CardLayout>
        {/* Date de début */}
        <CardItem
          name="Date de début"
          value={
            <View>
              <TouchableOpacity onPress={showDatepickerDD}>
                <Text style={styles.textAction}>
                  {dateDebut
                    ? ` ${dateDebut.getDate()} - ${
                        dateDebut.getMonth() + 1
                      } - ${dateDebut.getFullYear()}`
                    : 'choisir'}
                </Text>
              </TouchableOpacity>
            </View>
          }
        />
        {/* Date de fin */}
        <CardItem
          name="Date de fin"
          value={
            <View>
              <TouchableOpacity onPress={showDatepickerDF}>
                <Text style={styles.textAction}>
                  {dateDeFin
                    ? ` ${dateDeFin.getDate()} - ${
                        dateDeFin.getMonth() + 1
                      } - ${dateDeFin.getFullYear()}`
                    : 'choisir'}
                </Text>
              </TouchableOpacity>
            </View>
          }
        />

        {showDD && (
          <DateTimePicker
            testID="dateTimePicker"
            value={dateDebut}
            mode={modeDD}
            is24Hour={true}
            display="default"
            onChange={onChangeDD}
          />
        )}

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
                    {data.map(Element => (
                      <Picker.Item
                        key={Element.id}
                        label={Element.label}
                        value={Element.value}
                      />
                    ))}
                  </Picker>
                </Text>
              </TouchableOpacity>
            </View>
          }
        />
        {showDF && (
          <DateTimePicker
            testID="dateTimePicker"
            value={dateDeFin}
            mode={modeDF}
            is24Hour={true}
            display="default"
            onChange={onChangeDF}
          />
        )}
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
    backgroundColor: 'white',
  },
});
export default FrequencySetting;
