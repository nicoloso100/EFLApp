import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Icon, Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import { scenes } from "./resources";
import { primaryColor, bodyColor1 } from "../colors";

const Step3 = () => {
	const [scene, setScene] = useState(0);

	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<View style={styles.textContent}>
					<Text style={styles.title}>{scenes[scene].title}</Text>
				</View>
				<Button
					buttonStyle={styles.button}
					titleStyle={styles.buttonIcon}
					title="écouter"
					onPress={() => scenes[scene].sound.play()}
					icon={<Icon name="assistive-listening-systems" type="font-awesome" size={30} color="white" />}
				/>
			</View>
			<View style={styles.buttonOptions}>
				<View style={styles.buttomColumn}>
					<Button buttonStyle={styles.optionButton} title="saluer" onPress={() => setScene(0)} />
				</View>
				<View style={styles.buttomColumn}>
					<Button buttonStyle={styles.optionButton} title="dire au revoir" onPress={() => setScene(1)} />
				</View>
			</View>
			<ScrollView>
				<Image style={styles.image} source={scenes[scene].image}></Image>
				<TouchableOpacity onPress={() => scenes[scene].dialog1.sound.play()}>
					<View style={styles.dialog}>
						<Image style={styles.dialogImage} source={scenes[scene].dialog1.avatar}></Image>
						<View style={styles.dialogTextField}>
							<Text style={styles.dialogText}>{scenes[scene].dialog1.text}</Text>
						</View>
					</View>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => scenes[scene].dialog2.sound.play()}>
					<View style={styles.dialog}>
						<View style={styles.dialogTextField}>
							<Text style={styles.dialogText}>{scenes[scene].dialog2.text}</Text>
						</View>
						<Image style={styles.dialogImage} source={scenes[scene].dialog2.avatar}></Image>
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
		backgroundColor: bodyColor1
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
		flexDirection: "row-reverse",
		alignItems: "center",
		borderRadius: 5
	},
	textContent: {
		flex: 1,
		paddingLeft: 20
	},
	title: {
		flexShrink: 1,
		fontSize: 25,
		fontFamily: "Quicksand"
	},
	button: {
		backgroundColor: primaryColor,
		height: 60,
		borderRadius: 5
	},
	buttonIcon: {
		marginLeft: 15
	},
	optionButton: {
		height: 60,
		marginLeft: 5,
		marginRight: 5,
		borderRadius: 5,
		backgroundColor: primaryColor
	},
	buttomColumn: {
		flex: 1,
		flexDirection: "column"
	},
	buttonOptions: {
		marginTop: 20,
		marginBottom: 20,
		flexDirection: "row"
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
	}
});

export default Step3;
