import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PrimaryButton from '../buttons/PrimaryButton';
import CardLayout from '../card/CardLayout';
import CardItem from './CardItem';
//import DatePickerModal from './DatePickerModal';
import DateTimePicker from '@react-native-community/datetimepicker';
import { set } from 'react-native-reanimated';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
//import { platform } from 'os';

//import TimePickerModal from './TimePickerModal';
//Testing a library

//const UniqueSetting = () => {
  // Modal states
 /* const [visibleDD, setVisibleDD] = useState(false);
  const [visibleDF, setVisibleDF] = useState(false);
  const [visibleHP, setVisibleHP] = useState(false);*/

export default function UniqueSetting() {
  const [dateDebut, setDateDebut] = useState(new Date((1598051730000)));
  const [dateDeFin, setDateDeFin] = useState(new Date((1598051730000)));
  const [date, setDate] = useState(new Date((1598051730000)));
  const [heureDePrise, setHeureDePrise] = useState(new Date((1598051730000)));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
 // const [Text, setText] = useState('Empty');

const onChange = (event, selectedDate) =>{
  const currentDate = selectedDate || date;
  setShow(platform.os === 'ios');
  setDate(currentDate);

  let tempDate = new Date(currentdate);
  let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1)  + '/' + tempDate.getFullYear();
  let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempsDate.getMinutes();
  setText(fDate + '\n' + fTime)
  console.log(fDate + ' (' + fTime + ')')
}

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }

  return (
    <View>
      <CardLayout>
        {/* Date de début */}
        <CardItem
          name="Date de début"
          value={
            <View>
             <TouchableOpacity onPress={() => showMode('date')} style={styles.modalTitle}><Text>Choisir une date</Text>
                <Text style={styles.textAction}>
                  {dateDebut
                    ? ` ${dateDebut.getDate()} - ${dateDebut.getMonth()} - ${dateDebut.getFullYear()}`
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
             <TouchableOpacity onPress={() => showMode('date')} style={styles.modalTitle}><Text>Choisir une date</Text>
              <Text style={styles.textAction}>
                  {dateDeFin
                    ? ` ${dateDeFin.getDate()} - ${dateDeFin.getMonth()} - ${dateDeFin.getFullYear()}`
                    : 'choisir'}
                </Text>
              </TouchableOpacity>
            </View>
          }
        />

        {/* Heure de prise */}
        <CardItem
          name="Heure de prise"
          value={
            <View>
             <TouchableOpacity onPress={() => showMode('time')} style={styles.modalTitle}><Text>Choisir une heure</Text>
                <Text style={styles.textAction}>
                  {' '}
                  {heureDePrise
                    ? ` ${heureDePrise.getHours()}h : ${heureDePrise.getMinutes()}min`
                    : 'choisir'}
                </Text>
              </TouchableOpacity>
            </View>
          }
        />
      </CardLayout>

      {show && (
        <DateTimePicker
          testID='dateTimePicker'
          value={date}
          mode={mode}
          is24Hour={true}
          display='default'
          onChange={onChange}
          />)}
        
      {/* Save button */}
      <View style={styles.saveButton}>
        <PrimaryButton title="Sauvegarder" />
      </View>
    </View>
  );
  }


  const styles = StyleSheet.create({
    textAction: {
      color: 'red',
    },
    dateModal: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    saveButton: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'center',
    },
  });