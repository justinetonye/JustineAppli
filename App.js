import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import Ping from 'react-native-ping';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from './src/navigation/DrawerNavigator';
import { useEffect, useState } from 'react';
//import AsyncStorage from '@react-native-community/async-storage'

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
  
  for (let index = 0; index < 3; index++) {
    pingFunction();
    
  }

 /* const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);
 
  const fetchIpLocation =()=> {
    fetch('https://ipapi.co/json/')
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
}


    useEffect(() => { 
    fetchIpLocation()
  });*/

  return (
  
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );

 
  
             
};

export default App;
