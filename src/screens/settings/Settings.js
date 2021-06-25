import React, {useState} from 'react';
import SettingCard from '../../components/settings/SettingCard';
import ToggleBar from '../../components/settings/ToggleBar';
import Layout from '../../components/layout/Layout';

const Settings = ({navigation}) => {
  // Declaring the state of the toggle button
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Layout>
      <ToggleBar isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
      {isEnabled ? <SettingCard navigation={navigation} /> : null}
    </Layout>
  );
};

export default Settings;
