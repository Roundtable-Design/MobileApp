import { Asset, Constants, Audio as ExpoAudio, FileSystem } from "expo";
import { Button, StyleSheet, View } from "react-native";

import { Audio } from "expo-av";
import React from "react";

export default () => {
	const [recording, setRecording] = React.useState();

	async function startRecording() {
		try {
			console.log("Requesting permissions..");
			sss;
			await Audio.requestPermissionsAsync();
			await Audio.setAudioModeAsync({
				allowsRecordingIOS: true,
				playsInSilentModeIOS: true,
			});

			console.log("Starting recording..");
			const recording = new Audio.Recording();
			await recording.prepareToRecordAsync(
				Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
			);
			await recording.startAsync();
			setRecording(recording);
			console.log("Recording started");
		} catch (err) {
			console.error("Failed to start recording", err);
		}
	}

	async function stopRecording() {
		console.log("Stopping recording..");
		setRecording(undefined);
		await recording.stopAndUnloadAsync();
		const uri = recording.getURI();

		// Base64 encoding for reading & writing
		const options = { encoding: FileSystem.EncodingTypes.Base64 };
		// Read the audio resource from it's local Uri
		const data = await FileSystem.readAsStringAsync(uri, options);

		console.log("Recording stopped and stored at", uri);
	}

	return (
		<View style={styles.container}>
			<Button
				style={styles.button}
				onPress={recording ? stopRecording : startRecording}
				title={`${recording ? "Stop" : "Start"} recording`}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
});
