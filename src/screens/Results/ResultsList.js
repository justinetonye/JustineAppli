import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Card from '../../components/card/Card';
import Layout from '../../components/layout/Layout';

const ResultsList = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Layout>
        <View>
          <View style={styles.horizontalHeader}>
            <Text style={styles.title}> Résultat récent </Text>
            <Text style={styles.date}> 27/05/2021 </Text>
          </View>

          <View style={styles.spacing}>
            <Card />
          </View>
        </View>
        <View style={styles.listSection}>
          <Text style={styles.title}>Résultats précédents</Text>
          <View>
            <Text style={styles.dateSpacing}>27/05/2021</Text>
            <View style={styles.spacing}>
              <Card />
            </View>
            <View style={styles.spacing}>
              <Card />
            </View>
            <View style={styles.spacing}>
              <Card />
            </View>
            <View style={styles.spacing}>
              <Card />
            </View>
            <View style={styles.spacing}>
              <Card />
            </View>
            <View style={styles.spacing}>
              <Card />
            </View>
          </View>
        </View>
      </Layout>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  spacing: {
    marginTop: 10,
  },
  horizontalHeader: {
    marginTop: 30,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  date: {
    opacity: 0.7,
  },
  listSection: {
    marginTop: 30,
  },
  dateSpacing: {
    marginTop: 30,
    marginBottom: 10,
  },
});
export default ResultsList;
