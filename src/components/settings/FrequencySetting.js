import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PrimaryButton from '../buttons/PrimaryButton';
import CardLayout from '../card/CardLayout';
import CardItem from './CardItem';
import DatePickerModal from './DatePickerModal';
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

  const [selected, setSelected] = useState();

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
              <View style={styles.dateModal}>
                <DatePickerModal
                  mode="datetime"
                  date={dateDebut}
                  setDate={setDateDebut}
                  visible={visibleDD}
                  setVisible={setVisibleDD}
                />
              </View>
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
              <View style={styles.dateModal}>
                <DatePickerModal
                  mode="datetime"
                  date={dateDeFin}
                  setDate={setDateDeFin}
                  visible={visibleDF}
                  setVisible={setVisibleDF}
                />
              </View>
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
                  {/* <Picker
                    selectedValue={selected}
                    onValueChange={value => setSelected(value)}>
                    {data.map(item => (
                      <Picker.Item label={item.label} value={item.value} />
                    ))}
                  </Picker> */}
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
});
export default FrequencySetting;
