import { NativeRouter, Route } from "react-router-native";

import Edit from "./pages/edit";
import Entry from "./pages/entry";
import Home from "./pages/home";
import React from "react";
import { Text } from "react-native";

export default function App() {
	return (
		<NativeRouter>
			<Text>Hi</Text>
			<Route exact path="/" component={Home} />
			<Route path="/entry" component={Entry} />
			{/* <Route path="/edit" component={Edit} /> */}
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
