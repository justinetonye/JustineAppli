import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
//import { useState } from 'react/cjs/react.development';
import { useState, useEffect } from 'react';

const HomeLayout = ({children}) => {


const [operator, setOperator] = useState();
const [isLoading, setIsLoading] = useState(true);
console.log(operator);
useEffect(() => {
  fetch('https://ipapi.co/json/')
    .then((response) => response.json())
    .then((data) => setOperator(data.org))

}, []);

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
