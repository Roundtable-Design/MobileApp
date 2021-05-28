import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import Home from "./pages/home";
import Entry from "./pages/entry";
import Edit from "./pages/edit";
// In Expo
// View is = Div
// Text is = h1, h2, p


export default function App() {
  return (
    <NativeRouter>
      <Text>Hi</Text>
      <Route exact path="/" component={Home} />
      <Route path="/entry" component={Entry} />
      <Route path="/edit" component={Edit} />

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

