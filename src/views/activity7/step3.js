import React from "react";
import { View, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, Text, TextInput } from "react-native";
import ImageZoom from "react-native-image-pan-zoom";
import { Overlay, Icon, Button } from "react-native-elements";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import Notification from "../../components/notification";
import { step3list } from "./resources";
import { primaryColor, bodyColor1 } from "../colors";
import HomeButton from "../../components/HomeButton";
import { getResultsSeventhActivity } from "../../utils/activitiesResults";

console.disableYellowBox = true;

const TreeImage = ({ setStyle }) => {
	return <Image enableHorizontalBounce={true} style={setStyle} source={require("../../assets/img/activity7/mapCity.png")} />;
};

const getRandomItem = last => {
	let randomPos = Math.floor(Math.random() * 8);
	if (last) {
		while (step3list[randomPos] !== last) {
			let selectedItem = step3list[randomPos];
			return selectedItem;
		}
	} else {
		return step3list[randomPos];
	}
};

const Step3 = ({ navigation }) => {
	const [showModal, setShowModal] = useState(false);
	const [step, setStep] = useState(getRandomItem());
	const [text, setText] = useState("");
	const [result, setResult] = useState({
		showModal: false,
		isCorrect: null
	});
	const [correctValue, setCorrectValue] = useState(1);
	const [incorrectValue, setIncorrectValue] = useState(1);

	const onLayout = e => {
		setShowModal(false);
	};

	const validateAnswer = async () => {
		if (text.toLowerCase() === step.correctText.toLowerCase()) {
			setStep(getRandomItem(step));
			setText("");
			setResult({
				showModal: true,
				isCorrect: true
			});
			setCorrectValue(correctValue + 1);
			await AsyncStorage.setItem("SeventhActivitySecondStepCorrect", JSON.stringify(correctValue));
		} else {
			setResult({
				showModal: true,
				isCorrect: false
			});
			setIncorrectValue(incorrectValue + 1);
			await AsyncStorage.setItem("SeventhActivitySecondStepIncorrect", JSON.stringify(incorrectValue));
		}
	};

	const splitText = (text, split) => {
		return text.split(split);
	};

	useEffect(() => {
		const asyncUseEffect = async () => {
			let detailed = (await getResultsSeventhActivity()).detailed;
			setCorrectValue(detailed.firstActivityCorrect + 1);
			setIncorrectValue(detailed.firstActivityIncorrect + 1);
		};
		asyncUseEffect();
	}, []);

	return (
		<View style={styles.container} onLayout={onLayout.bind(this)}>
			<HomeButton navigate={navigation.navigate} />
			<Notification showModal={result.showModal} setShowModal={() => setResult({ ...result, showModal: false })} isCorrect={result.isCorrect} />

			<Overlay
				isVisible={showModal}
				onBackdropPress={() => setShowModal(false)}
				windowBackgroundColor="rgba(0, 0, 0, 0.7)"
				overlayBackgroundColor="transparent"
				width="auto"
				height="auto">
				<View>
					<Button buttonStyle={styles.optionButton} title="proche" onPress={() => setShowModal(false)} />
					<ImageZoom
						cropWidth={Dimensions.get("window").width}
						cropHeight={Dimensions.get("window").height - 65}
						imageWidth={Dimensions.get("window").width}
						imageHeight={Dimensions.get("window").height}
						enableSwipeDown={true}>
						<TreeImage setStyle={styles.modalImage} />
					</ImageZoom>
				</View>
			</Overlay>
			<ScrollView>
				<TouchableOpacity activeOpacity={0.5} onPress={() => setShowModal(true)}>
					<TreeImage setStyle={styles.staticImage} />
				</TouchableOpacity>
				<View style={styles.card}>
					<View style={styles.textContent}>
						<Text style={styles.title}>{step.text}</Text>
					</View>
					<TouchableOpacity onPress={() => step.audio.play()}>
						<Icon raised name="play" type="font-awesome" color={primaryColor} />
					</TouchableOpacity>
				</View>
				<View style={styles.answerContainer}>
					<Text style={styles.title}>{splitText(step.answerText, step.correctText)[0]}</Text>
					<TextInput style={styles.input} value={text} onChangeText={text => setText(text)} />
				</View>
				<View style={styles.buttonOptions}>
					<View style={styles.buttomColumn}>
						<Button buttonStyle={styles.optionButton} title="écoute" onPress={() => step.answer.play()} />
					</View>
					<View style={styles.buttomColumn}>
						<Button buttonStyle={styles.optionButton} title="vérifier" onPress={() => validateAnswer()} />
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: bodyColor1
	},
	staticImage: {
		height: 300,
		width: "90%",
		resizeMode: "center",
		marginBottom: 20,
		alignSelf: "center"
	},
	modalImage: {
		flex: 1,
		alignSelf: "stretch",
		resizeMode: "contain",
		width: undefined,
		height: undefined
	},
	card: {
		flex: 2,
		margin: 7,
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
		fontSize: 25,
		fontFamily: "Quicksand"
	},
	input: {
		width: 100,
		backgroundColor: "#DCE5F1",
		fontSize: 20,
		textAlign: "center",
		paddingTop: 0,
		paddingBottom: 0,
		paddingRight: 1,
		paddingLeft: 1,
		marginRight: 1,
		marginLeft: 1
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
	optionButton: {
		height: 60,
		marginLeft: 5,
		marginRight: 5,
		borderRadius: 5,
		backgroundColor: primaryColor
	},
	answerContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		marginTop: 20,
		padding: 20
	}
});

export default Step3;
