import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import ResetButton from '../buttons/ResetButton';
import CardItem from './CardItem';

const SettingCard = ({navigation}) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Mésures par fréquence (Défaut)</Text>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditSettings')}
            style={styles.edit}>
            <Ionicons name="create-outline" color="red" size={15} />
            <Text style={styles.primary}>Modifier</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <CardItem name="Fréquence de prise" value="30min" />
        <CardItem name="Date de début" value="27-08-2021" />
        <CardItem name="Date de fin" value="29-08-2021" />
      </View>
      <View style={styles.resetButton}>
        <ResetButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 3,
    elevation: 1,
    padding: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  edit: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  primary: {
    color: 'red',
    marginLeft: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  resetButton: {
    marginTop: 50,
    width: 150,
    alignSelf: 'center',
  },
});

export default SettingCard;
