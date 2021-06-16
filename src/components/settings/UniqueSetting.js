import React from 'react';
import {} from 'react-native';
import CardLayout from '../card/CardLayout';
import CardItem from './CardItem';

const UniqueSetting = () => {
  return (
    <CardLayout>
      <CardItem name="Date de début" />
      <CardItem name="Date de fin" />
      <CardItem name="Heure de prise" />
    </CardLayout>
  );
};

export default UniqueSetting;
