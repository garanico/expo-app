import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import grace from './assets/grace.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={grace} style={styles.grace}/>
      <Text style={styles.name}>Grace Aranico</Text>
      <Text style={styles.title}>React Native Apprentice</Text>
      <Text style={styles.pronoun}>She/Her</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid gray',
    width: 350,
    margin: "auto",
    
    
  },
  grace: {
    width: 300,
    height: 450,
    borderRadius: 20,
    border: '2px solid gray',
  },
  name: {
    margin: 5,
  },
  title: {
    margin: 5,
  },
  pronoun: {
    margin: 5,
  }
});
