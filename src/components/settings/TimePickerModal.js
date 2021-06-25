import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';

const TimePickerModal = ({visible, setVisible, date, setDate, mode}) => {
  const toggleModal = () => {
    setVisible(!visible);
  };
  return (
    <Modal isVisible={visible}>
      <View style={styles.modal}>
        <Text style={styles.modalTitle}>Choisir une date</Text>
        <View style={styles.modalContent}>
          <DatePicker
            locale="fr"
            date={date}
            is24hourSource="locale"
            mode="time"
            onDateChange={setDate}
            androidVariant="nativeAndroid"
          />
        </View>
        <View>
          <View style={styles.modalFooter}>
            {/* <TouchableOpacity
              style={styles.cancelBtn}
              onPress={() => toggleModal()}>
              <Text style={styles.cancelBtnText}>Annuler</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              onPress={() => toggleModal()}
              style={styles.validateBtn}>
              <Text style={styles.validateBtnText}>Valider</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {},

  modal: {
    backgroundColor: 'white',
    elevation: 5,
    marginTop: 20,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  modalTitle: {
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalFooter: {
    flexDirection: 'row',
    marginTop: 15,
  },
  cancelBtn: {
    marginRight: 50,
  },
  cancelBtnText: {},
  validateBtn: {},
  validateBtnText: {
    color: 'red',
  },
});

export default TimePickerModal;
