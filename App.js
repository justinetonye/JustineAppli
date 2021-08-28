import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import Ping from 'react-native-ping';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from './src/navigation/DrawerNavigator';

async function pingFunction() {
  try {
    /**
     *
     * Get RTT (Round-trip delay time)
     *
     * @static
     * @param {string} ipAddress - For example : 8.8.8.8
     * @param {Object} option - Some optional operations
     * @param {number} option.timeout - timeout
     * @returns
     * @memberof Ping
     */
    const ms = await Ping.start('8.8.8.8', {timeout: 50000});
    console.log(`Time in ms : ${ms}`);
  } catch (error) {
    console.log('special code', error.code, error.message);
  }

  const {
    receivedNetworkSpeed,
    sendNetworkSpeed,
    receivedNetworkTotal,
    sendNetworkTotal,
  } = await Ping.getTrafficStats();

  console.log(`Received network speed (download/sec) ${receivedNetworkSpeed}`);
  console.log(`sendNetworkSpeed speed (upload/sec) ${sendNetworkSpeed}`);
  console.log(
    `receivedNetworkTotal speed (download Total) ${receivedNetworkTotal}`,
  );
  console.log(`sendNetworkTotal speed UploadTotal ${sendNetworkTotal}`);
}

const App = () => {
  
  for (let index = 0; index < 5; index++) {
    pingFunction();
    
  }

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
