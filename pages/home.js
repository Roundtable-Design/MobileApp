import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Card, Title, Paragraph} from 'react-native-paper';

import { Link } from "react-router-native";

// import styled from "styled-components";
//  home page
//    all entries (sort by date)
//      entry.title
//      entry.description



export default function Home() {
 
  // const history = useHistory();

  return (
    <View style={styles.container}>
      <Link to="entry">
        <Card style={styles.entry}>
          <Card.Content>
            <Title>Entry title</Title>
            <Paragraph>Entry description</Paragraph>
          </Card.Content>
        </Card>
    </Link>
      
          
      
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    top: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
