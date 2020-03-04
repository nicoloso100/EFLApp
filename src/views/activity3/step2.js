import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { scene } from "./resources";
import { primaryColor, bodyColor2 } from "../colors";

const Step2 = () => {
	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<Text style={styles.title}>Asking about your name</Text>
			</View>
			<ScrollView style={styles.scroll}>
				<TouchableOpacity onPress={() => scene.dialog1.sound.play()}>
					<View style={styles.dialog}>
						<Image style={styles.dialogImage} source={scene.dialog1.avatar}></Image>
						<View style={styles.dialogTextField}>
							<Text style={styles.dialogText}>{scene.dialog1.text}</Text>
						</View>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => scene.dialog2.sound.play()}>
					<View style={styles.dialog}>
						<View style={styles.dialogTextField}>
							<Text style={styles.dialogText}>{scene.dialog2.text}</Text>
						</View>
						<Image style={styles.dialogImage} source={scene.dialog2.avatar}></Image>
					</View>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => scene.dialog3.sound.play()}>
					<View style={styles.dialog}>
						<Image style={styles.dialogImage} source={scene.dialog3.avatar}></Image>
						<View style={styles.dialogTextField}>
							<Text style={styles.dialogText}>{scene.dialog3.text}</Text>
						</View>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => scene.dialog4.sound.play()}>
					<View style={styles.dialog}>
						<View style={styles.dialogTextField}>
							<Text style={styles.dialogText}>{scene.dialog4.text}</Text>
						</View>
						<Image style={styles.dialogImage} source={scene.dialog4.avatar}></Image>
					</View>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: bodyColor2
	},
	image: {
		alignSelf: "center",
		width: 200,
		height: 200,
		marginBottom: 20
	},
	card: {
		height: 80,
		marginBottom: 7,
		marginTop: 7,
		borderBottomColor: primaryColor,
		borderBottomWidth: 2,
		borderRadius: 5,
		justifyContent: "center"
	},
	title: {
		flexShrink: 1,
		fontSize: 25,
		fontFamily: "Quicksand"
	},
	dialog: {
		flex: 1,
		flexDirection: "row",
		marginBottom: 40
	},
	dialogImage: {
		width: 100,
		height: 100
	},
	dialogTextField: {
		flex: 1,
		backgroundColor: "white",
		padding: 10,
		justifyContent: "center"
	},
	dialogText: {
		fontSize: 24
	},
	scroll: {
		marginTop: 15
	}
});

export default Step2;
