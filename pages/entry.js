import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import styled from "styled-components";


export default function Entry() {
  return (
    <View style={styles.container}>
        <Text>This is Home</Text>
      <View>
        
      </View>
      
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
