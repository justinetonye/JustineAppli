import React from 'react';
import RNPickerSelect from '@react-native-picker/picker';

const PickerSelect = ({data, setValue}) => {
  return (
    <RNPickerSelect onValueChange={value => setValue(value)} items={data} />
  );
};

export default PickerSelect;
