import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingCard = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Mésures par fréquence (Défaut)</Text>
        <View style={styles.edit}>
          <Ionicons name="create-outline" color="red" size={15} />
          <Text style={styles.primary}>Modifier</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <Text>Fréquence de prise</Text>
        </View>
        <View>
          <Text>Date de début</Text>
        </View>
        <View>
          <Text>Date de fin</Text>
        </View>
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
    marginTop: 20,
    marginBottom: 20,
  },
});

export default SettingCard;
