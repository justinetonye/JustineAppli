import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from './src/navigation/DrawerNavigator';
//import AsyncStorage from '@react-native-community/async-storage'

const App = () => {
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
