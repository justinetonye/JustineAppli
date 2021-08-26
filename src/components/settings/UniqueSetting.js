import React, {useState} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PrimaryButton from '../buttons/PrimaryButton';
import CardLayout from '../card/CardLayout';
import CardItem from './CardItem';
import DateTimePicker from '@react-native-community/datetimepicker';

const UniqueSetting = () => {
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

  /* Heure de prise settings */
  const [heureDePrise, setHeureDePrise] = useState(new Date());
  const [modeHP, setModeHP] = useState('date');
  const [showHP, setShowHP] = useState(false);
  const onChangeHP = (event, selectedDate) => {
    const currentDate = selectedDate || heureDePrise;
    setShowHP(Platform.OS === 'ios');
    setHeureDePrise(currentDate);
  };

  const showModeHP = currentMode => {
    setModeHP(currentMode);
  };
  const showDatepickerHP = () => {
    showModeHP('time');
    setShowHP(true);
  };
  /* End Heure de prise settings */

  console.log('date de début ' + dateDebut);

  console.log('date de fin ' + dateDeFin);

  console.log('heure de prise ' + heureDePrise);

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
                    ? ` ${dateDebut.getDate()} - ${dateDebut.getMonth () +1} - ${dateDebut.getFullYear()}`
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

        {/* Date de fin */}
        <CardItem
          name="Date de fin"
          value={
            <View>
              <TouchableOpacity onPress={showDatepickerDF}>
                <Text style={styles.textAction}>
                  {dateDeFin
                    ? ` ${dateDeFin.getDate()} - ${dateDeFin.getMonth() +1} - ${dateDeFin.getFullYear()}`
                    : 'choisir'}
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

        {/* Heure de prise */}
        <CardItem
          name="Heure de prise"
          value={
            <View>
              <TouchableOpacity onPress={showDatepickerHP}>
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

        {showHP && (
          <DateTimePicker
            testID="dateTimePicker"
            value={heureDePrise}
            mode={modeHP}
            is24Hour={true}
            display="default"
            onChange={onChangeHP}
          />
        )}
      </CardLayout>
        
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

  export default UniqueSetting;