import React from 'react';
import {View, StyleSheet} from 'react-native';

const CardLayout = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    elevation: 1,
    borderRadius: 3,
    padding: 15,
    marginHorizontal: 0,
  },
});

export default CardLayout;
