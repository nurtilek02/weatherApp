import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import Loading from './Loading';
 
export default class extends React.Component {
  
  getLocation = async () => {
    try {
     const response = await Location.requestForegroundPermissionsAsync();
     console.log(response);
      const location = await Location.getCurrentPositionAsync();
      console.log(location); 
    } catch (error) {
      Alert.alert('Не могу определить местоположение', "Очень грустно:(")
    }   
  }

  componentDidMount() {
    this.getLocation();
  }

  render () {
    return (
      <Loading/>
    );
  }
}