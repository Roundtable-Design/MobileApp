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
        <View style={styles.navbar}>
            <Link style={styles.navItem} to="/"><Text>go Home</Text></Link>
            <Link style={styles.navItem} to="/edit"><Text>Edit</Text></Link>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  navItem: {
    color: 'red',
    // width: '50%',
    alignSelf: 'center',
  },
  navbar:{
    position: 'absolute',
    bottom: 10,
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-around',
    width: '100%',
  }

});
