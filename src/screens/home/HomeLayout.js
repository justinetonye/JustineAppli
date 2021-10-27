import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const HomeLayout = ({children}) => {
  const [operator, setOperator] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    DeviceInfo.getCarrier().then(carrier => {});
  }, []);

  console.log(operator);

  return (
    <View style={styles.layout}>
      <Text style={styles.text}> {operator} </Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 100,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
export default HomeLayout;
