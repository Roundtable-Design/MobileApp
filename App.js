import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

// In Expo
// View is = Div
// Text is = h1, h2, p


export default function App() {
  return (
    <NativeRouter>

    {/* <View style={styles.container}>
      <Text>Open Inkar to start working on our app!</Text>
      <StatusBar style="auto" />
    </View> */}
    </NativeRouter>
  );
}

// react-router-native
// build a page structure
//  home page
//    all entries (sort by date)
//      entry.title
//      entry.description
//  entry page
//    title
//    content
//  edit/create page
//    title field
//    description field
//    content field

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
