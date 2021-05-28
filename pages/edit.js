import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { useHistory } from "react-router-native";

//  edit/create page
//    title field
//    description field
//    content field


export default function Edit() {

  return (
    <View style={styles.container}>
        <Text>This is Entry</Text>
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
