import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, TouchableOpacity, ScrollView, Text } from "react-native";
import { Icon } from "react-native-elements";
import AsyncStorage from "@react-native-community/async-storage";

import Notification from "../../components/notification";
import { Step2List } from "./resources";
import { primaryColor, bodyColor2 } from "../colors";
import { getResultsFourthtActivity } from "../../utils/activitiesResults";

const Step2 = () => {
	const [correctValue, setCorrectValue] = useState(1);
	const [incorrectValue, setIncorrectValue] = useState(1);

	const onCorrectClick = async () => {
		setStep(getRandomItem());
		setResult({
			showModal: true,
			isCorrect: true
		});
		setCorrectValue(correctValue + 1);
		await AsyncStorage.setItem("FourthActivityFirstStepCorrect", JSON.stringify(correctValue));
	};

	const onInCorrectClick = async () => {
		setResult({
			showModal: true,
			isCorrect: false
		});
		setIncorrectValue(incorrectValue + 1);
		await AsyncStorage.setItem("FourthActivityFirstStepIncorrect", JSON.stringify(incorrectValue));
	};

	const getRandomItem = () => {
		let selectedItem = Step2List[Math.floor(Math.random() * 10)];
		let correctPos = Math.random() < 0.5 ? 0 : 1;
		let correctCase = {
			image: selectedItem.correctImage,
			action: onCorrectClick
		};
		let incorrectCase = {
			image: selectedItem.incorrectImage,
			action: onInCorrectClick
		};
		selectedItem = {
			...selectedItem,
			options: [correctPos === 0 ? correctCase : incorrectCase, correctPos === 1 ? correctCase : incorrectCase]
		};
		return selectedItem;
	};

	const [step, setStep] = useState(getRandomItem());
	const [result, setResult] = useState({
		showModal: false,
		isCorrect: null
	});

	useEffect(() => {
		const asyncUseEffect = async () => {
			let detailed = (await getResultsFourthtActivity()).detailed;
			setCorrectValue(detailed.firstActivityCorrect + 1);
			setIncorrectValue(detailed.firstActivityIncorrect + 1);
		};
		asyncUseEffect();
	}, []);

	return (
		<View style={styles.container}>
			<Notification showModal={result.showModal} setShowModal={() => setResult({ ...result, showModal: false })} isCorrect={result.isCorrect} />

			<View style={styles.card}>
				<View style={styles.textContent}>
					<Text style={styles.title}>{step.text}</Text>
				</View>
				<TouchableOpacity onPress={() => step.audio.play()}>
					<Icon raised name="play" type="font-awesome" color={primaryColor} />
				</TouchableOpacity>
			</View>
			<ScrollView>
				<TouchableOpacity onPress={() => step.options[0].action()}>
					<View style={styles.imageContainer}>
						<Image style={styles.image} source={step.options[0].image} />
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => step.options[1].action()}>
					<View style={styles.imageContainer}>
						<Image style={styles.image} source={step.options[1].image} />
					</View>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: bodyColor2
	},
	card: {
		height: 80,
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
	image: {
		width: 250,
		height: 250
	},
	imageContainer: {
		alignItems: "center",
		paddingTop: 10,
		backgroundColor: "white",
		margin: 10,
		borderRadius: 10
	}
});

export default Step2;
