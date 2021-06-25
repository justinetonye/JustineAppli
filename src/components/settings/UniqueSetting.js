import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CardLayout from '../card/CardLayout';
import CardItem from './CardItem';
import DatePickerModal from './DatePickerModal';

const UniqueSetting = () => {
  // Modal state
  const [visible, setVisible] = useState(false);

  const [dateDebut, setDateDebut] = useState(new Date());

  const [dateDeFin, setDateDeFin] = useState(new Date());
  const [heureDePrise, setHeureDePrise] = useState(new Date());

  const toggleModal = () => {
    setVisible(!visible);
  };

  //console.log(dateDebut);
  //console.log(dateDeFin);
  console.log(heureDePrise);

  return (
    <CardLayout>
      <CardItem
        name="Date de début"
        value={
          <View>
            <TouchableOpacity onPress={() => toggleModal()}>
              <Text style={styles.textAction}>Choisir</Text>
            </TouchableOpacity>
            <View style={styles.dateModal}>
              <DatePickerModal
                date={dateDebut}
                setDate={setDateDebut}
                visible={visible}
                setVisible={setVisible}
              />
            </View>
          </View>
        }
      />
      <CardItem
        name="Date de fin"
        value={
          <View>
            <TouchableOpacity onPress={() => toggleModal()}>
              <Text style={styles.textAction}>Choisir</Text>
            </TouchableOpacity>
            <View style={styles.dateModal}>
              <DatePickerModal
                date={dateDeFin}
                setDate={setDateDeFin}
                visible={visible}
                setVisible={setVisible}
              />
            </View>
          </View>
        }
      />
      <CardItem
        name="Heure de prise"
        value={
          <View>
            <TouchableOpacity onPress={() => toggleModal()}>
              <Text style={styles.textAction}>Choisir</Text>
            </TouchableOpacity>
            <DatePickerModal
              date={heureDePrise}
              setDate={setHeureDePrise}
              visible={visible}
              setVisible={setVisible}
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
