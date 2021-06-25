import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CardLayout from '../card/CardLayout';
import CardItem from './CardItem';
import DatePickerModal from './DatePickerModal';
import TimePickerModal from './TimePickerModal';

const UniqueSetting = () => {
  // Modal state
  const [visibleDD, setVisibleDD] = useState(false);
  const [visibleDF, setVisibleDF] = useState(false);
  const [visibleHP, setVisibleHP] = useState(false);

  const [dateDebut, setDateDebut] = useState(new Date());

  const [dateDeFin, setDateDeFin] = useState(new Date());
  const [heureDePrise, setHeureDePrise] = useState(new Date());

  const toggleModalDD = () => {
    setVisibleDD(!visibleDD);
  };

  const toggleModalDF = () => {
    setVisibleDF(!visibleDF);
  };

  const toggleModalHP = () => {
    setVisibleHP(!visibleHP);
  };

  //console.log(dateDebut);
  //console.log(dateDeFin);
  console.log(heureDePrise);

  return (
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

      {/* Heure de prise */}
      <CardItem
        name="Heure de prise"
        value={
          <View>
            <TouchableOpacity onPress={() => toggleModalHP()}>
              <Text style={styles.textAction}>
                {' '}
                {heureDePrise
                  ? ` ${heureDePrise.getHours()}h : ${heureDePrise.getMinutes()}min`
                  : 'choisir'}
              </Text>
            </TouchableOpacity>
            <TimePickerModal
              date={heureDePrise}
              setDate={setHeureDePrise}
              visible={visibleHP}
              setVisible={setVisibleHP}
              mode="time"
            />
          </View>
        }
      />
    </CardLayout>
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
});

export default UniqueSetting;
