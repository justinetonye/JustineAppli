import React, {useState} from 'react';
import StartButton from '../../components/buttons/StartButton';
import HomeLayout from './HomeLayout';
import Ping from 'react-native-ping';
import {mostVisitedWebsites} from '../../../websites';

const Home = ({navigation}) => {
  const [latency, setLatency] = useState([]);

  const [loading, setLoading] = useState(false);
  var results = [];
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

      mostVisitedWebsites.map(
        async value =>
          await Ping.start(`"${value}"`, {timeout: 1000})
            .then(res => {
              console.log(`site ${value} ping ${res}`), results.push(res);
            })
            .catch(err => console.log('Error ' + err)),
      );
      console.log('results 1' + results);
    } catch (error) {
      console.log('special code', error.code, error.message);
    }
  }

  // Lauching the process

  const launchMetrics = () => {
    pingFunction();
    console.log('results 1' + results);
  };

  return (
    <HomeLayout>
      <StartButton
        onPress={() => {
          // eslint-disable-next-line no-sequences
          navigation.navigate('HomeResults'), launchMetrics();
        }}
      />
    </HomeLayout>
  );
};

export default Home;
