import { StyleSheet, Text, View } from "react-native";

import { Link } from "react-router-native";
import React from "react";

export default function Home() {
	return (
		<View style={styles.container}>
			<Text>This is Home!</Text>

			<Link to="/upload">
				<Text>Go to upload page</Text>
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
