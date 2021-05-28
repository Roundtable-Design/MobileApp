import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { Link } from "react-router-native";

// import styled from "styled-components";
//entry page
//    title
//    content

export default function Entry() {

  return (
    <View style={styles.container}>
        <Text h4 style={styles.title}>Entry title</Text>
        <Text style={styles.content}>Entry content</Text>
        <Link style={styles.edit} to="/"><Text>Edit</Text></Link>
        <Link style={styles.goBack} to="/edit"><Text>go Home</Text></Link>
      
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  edit: {
    color: 'red',
    position: 'absolute',
    right: 20,
    bottom: 10,
  },
  goBack: {
    color: 'red',
    position: 'absolute',
    bottom: 10,
  },

});
