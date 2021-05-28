import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Link, useHistory } from "react-router-native";

// import styled from "styled-components";




export default function Home() {
 
  const history = useHistory();

  return (
    <View style={styles.container}>
      <Text>This is Home!</Text>
      <Link to="/entry">
            <Button onClick={history.push("/entry")} style={styles.button} title="Open entry">Entry title</Button>

      </Link>
      <View>

      </View>
      
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  button:{
    width:' 100%',
    backgroundColor: 'black',
    color: 'white',
  }
});
