import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Layout = ({children}) => {
  return (
    <View style={styles.layout}>
      <Text style={styles.text}> CAMTEL </Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 100,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
export default Layout;
