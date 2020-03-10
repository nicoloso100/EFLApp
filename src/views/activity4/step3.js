import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, Text, TextInput } from "react-native";
import ImageZoom from "react-native-image-pan-zoom";
import { Overlay, Icon, Button } from "react-native-elements";
import AsyncStorage from "@react-native-community/async-storage";

import Notification from "../../components/notification";
import { step3list } from "./resources";
import { primaryColor, bodyColor1 } from "../colors";
import HomeButton from "../../components/HomeButton";
import { getResultsFourthtActivity } from "../../utils/activitiesResults";

console.disableYellowBox = true;

const TreeImage = ({ setStyle }) => {
	return <Image enableHorizontalBounce={true} style={setStyle} source={require("../../assets/img/activity4/arbolGenealogico.jpeg")} />;
};

const getRandomItem = prevItem => {
	let selectedItem = step3list[Math.floor(Math.random() * 7)];
	if (!selectedItem || (prevItem && prevItem.text === selectedItem.text)) {
		getRandomItem(prevItem);
	} else {
		return selectedItem;
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
			await AsyncStorage.setItem("FourthActivitySecondStepCorrect", JSON.stringify(correctValue));
		} else {
			setResult({
				showModal: true,
				isCorrect: false
			});
			setIncorrectValue(incorrectValue + 1);
			await AsyncStorage.setItem("FourthActivitySecondStepIncorrect", JSON.stringify(incorrectValue));
		}
	};

	useEffect(() => {
		const asyncUseEffect = async () => {
			let detailed = (await getResultsFourthtActivity()).detailed;
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
					<Text style={styles.title}>{step.answerText}</Text>
					<TextInput style={styles.input} value={text} onChangeText={text => setText(text)} />
					<View style={styles.buttonOptions}>
						<View style={styles.buttomColumn}>
							<Button buttonStyle={styles.optionButton} title="Entendre la réponse" onPress={() => step.answerAudio.play()} />
						</View>
						<View style={styles.buttomColumn}>
							<Button buttonStyle={styles.optionButton} title="vérifier" onPress={() => validateAnswer()} />
						</View>
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
		width: "100%",
		resizeMode: "center"
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
		flexShrink: 1,
		fontSize: 25,
		fontFamily: "Quicksand"
	},
	input: {
		marginTop: 10,
		width: "80%",
		backgroundColor: "white",
		fontSize: 20,
		textAlign: "center"
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
		marginTop: 20,
		alignItems: "center"
	}
});

export default Step3;
