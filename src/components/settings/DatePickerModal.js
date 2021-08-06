import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


const DatePickerModal = ({visible, setVisible, date, setDate}) => {


  const toggleModal = () => {
    setVisible(!visible);
  };

  const [mode, setMode] = useState('date');
  
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setVisible(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
<View>
        <TouchableOpacity onPress={showDatepicker} style={styles.modalTitle}><Text>Choisir une date</Text></TouchableOpacity>
         {visible && <DateTimePicker
            is24Hour={true}
            testID="dateTimePicker"
            mode={mode}
            value={date}
            onChange={onChange}
            display="default"
          />} 
        <View>
        </View>
      </View>
      
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

export default DatePickerModal;
