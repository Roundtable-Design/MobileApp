import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// In Expo
// View is = Div
// Text is = h1, h2, p


export default function Home() {
  return (
    <View style={styles.container}>
      <Text>This is Home</Text>
      <StatusBar style="auto" />
    </View> 
  );
}