import React from 'react';
import {Modal, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';

const DatePickerModal = ({visible, setVisible, date, setDate}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(!visible)}>
      <View style={styles.modal}>
        <Text style={styles.modalTitle}>Choisir une date</Text>
        <View style={styles.modalContent}>
          <DatePicker
            date={date}
            onDateChange={setDate}
            androidVariant="nativeAndroid"
          />
        </View>
        <View style={styles.modalFooter}>
          <TouchableOpacity>
            <Text>Annuler</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Valider</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {},

  modal: {
    backgroundColor: 'white',
    elevation: 2,
    padding: 15,
    margin: 30,
  },
  modalTitle: {},
  modalContent: {},
  modalFooter: {
    flexDirection: 'row',
  },
});

export default DatePickerModal;
