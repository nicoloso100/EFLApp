import React, { useEffect } from "react";
import { Modal, TouchableWithoutFeedback, View, StyleSheet, Text } from "react-native";

import { Image } from "react-native-elements";

var Sound = require("react-native-sound");
var correctSound = new Sound("correct.ogg", Sound.MAIN_BUNDLE);
var errorSound = new Sound("error.ogg", Sound.MAIN_BUNDLE);

const getTexts = correct => {
	if (correct) {
		return "bravo !";
	} else {
		return "répéter semestre";
	}
};

const Notification = ({ showModal, setShowModal, isCorrect }) => {
	useEffect(() => {
		if (showModal && isCorrect) {
			correctSound.play();
		} else if (showModal && !isCorrect) {
			errorSound.play();
		}
	}, [showModal]);

	return (
		<Modal animationType="fade" visible={showModal} transparent={true} onRequestClose={() => setShowModal(false)}>
			<TouchableWithoutFeedback onPress={() => setShowModal(false)}>
				<View style={styles.modalOverlay}>
					<View style={styles.modalContent}>
						{isCorrect ? (
							<Image style={styles.resultIcon} source={require("../assets/img/correct.png")} />
						) : (
							<Image style={styles.resultIcon} source={require("../assets/img/incorrect.png")} />
						)}
						<Text style={styles.resultText}>{getTexts(isCorrect)}</Text>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
	);
};

const styles = StyleSheet.create({
	modalContent: {
		alignSelf: "center",
		alignItems: "center",
		top: "50%",
		transform: [{ translateY: -150 }],
		width: 200,
		height: 300,
		padding: 20,
		backgroundColor: "white",
		borderRadius: 7
	},
	modalOverlay: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: "rgba(0,0,0,0.5)"
	},
	resultIcon: {
		width: 100,
		height: 100,
		alignSelf: "center",
		marginBottom: 20
	},
	resultText: {
		top: 30,
		fontSize: 25,
		textAlign: "center"
	}
});

export default Notification;
