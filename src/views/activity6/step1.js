import React from "react";
import YouTube from "react-native-youtube";
import { View, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";
import { primaryColor, bodyColor1 } from "../colors";

const Step1 = () => {
	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Icon name="youtube" type="font-awesome" color={primaryColor} size={40} />
				<Text style={styles.title}>Verbe être</Text>
			</View>
			<YouTube apiKey="AIzaSyAXd-BG6vu7AUnd-VcsEGV3mIztzIU9z2U" videoId="z2IrJ0DB0Xg" play={false} style={styles.videPlayer} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: bodyColor1
	},
	titleContainer: {
		flexDirection: "row",
		padding: 20,
		marginBottom: 20,
		borderBottomColor: primaryColor,
		borderBottomWidth: 2
	},
	title: {
		marginLeft: 30,
		textAlign: "center",
		flexShrink: 1,
		fontSize: 25,
		fontFamily: "Quicksand"
	},
	videPlayer: {
		alignSelf: "stretch",
		flex: 1
	}
});

export default Step1;
