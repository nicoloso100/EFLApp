import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";

import Notification from "../../components/notification";
import ListIconCard from "../../components/ListIconCard";
import { steps4 } from "./resources";
import { bodyColor1, primaryColor } from "../colors";
import { getResultsSecondActivity } from "../../utils/activitiesResults";
import { getRandomPos } from "../../utils/random";

const randomArray = prevCorrect => {
	let array = getRandomPos(steps4.length);
	let response = {
		correct: Math.floor(Math.random() * 3),
		optionSet: [steps4[array[0]], steps4[array[1]], steps4[array[2]]]
	};

	if (!response.optionSet[response.correct] || (prevCorrect && prevCorrect.title === response.optionSet[response.correct].title)) {
		return randomArray(prevCorrect);
	} else {
		return response;
	}
};

const Step5 = () => {
	const [options, setoptions] = useState(randomArray());
	const [result, setResult] = useState({
		showModal: false,
		isCorrect: null
	});
	const [correctValue, setCorrectValue] = useState(1);
	const [incorrectValue, setIncorrectValue] = useState(1);

	const { optionSet, correct } = options;

	useEffect(() => {
		const asyncUseEffect = async () => {
			let detailed = (await getResultsSecondActivity()).detailed;
			setCorrectValue(detailed.secondActivityCorrect + 1);
			setIncorrectValue(detailed.secondActivityIncorrect + 1);
		};
		asyncUseEffect();
	}, []);

	const setShowModal = () => {
		setResult({ ...result, showModal: false });
	};

	const select = async selection => {
		let isCorrect = false;
		let correctOption = optionSet[correct];
		if (selection.title === correctOption.title) {
			isCorrect = true;
			setCorrectValue(correctValue + 1);
			await AsyncStorage.setItem("SecondActivitySecondStepCorrect", JSON.stringify(correctValue));
		} else {
			isCorrect = false;
			setIncorrectValue(incorrectValue + 1);
			await AsyncStorage.setItem("SecondActivitySecondStepIncorrect", JSON.stringify(incorrectValue));
		}
		setResult({
			showModal: true,
			isCorrect: isCorrect
		});
		setoptions(randomArray(correctOption));
	};

	return (
		<View style={styles.container}>
			<Notification showModal={result.showModal} setShowModal={setShowModal} isCorrect={result.isCorrect} />

			<View style={styles.imageContainer}>
				<TouchableOpacity
					onPress={() => {
						optionSet[correct].sound.play();
					}}>
					<Image style={styles.playButton} source={require("../../assets/img/play.png")} />
				</TouchableOpacity>
			</View>
			<View style={styles.optionsContainer}>
				<ScrollView>
					<View style={styles.row}>
						<View style={styles.option}>
							<TouchableOpacity onPress={() => select(optionSet[0])}>
								<ListIconCard key={optionSet[0].title} icon={optionSet[0].image} dimensions={120} />
							</TouchableOpacity>
						</View>
						<View style={styles.option}>
							<TouchableOpacity onPress={() => select(optionSet[1])}>
								<ListIconCard key={optionSet[1].title} icon={optionSet[1].image} dimensions={120} />
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.row}>
						<View style={styles.option}>
							<TouchableOpacity onPress={() => select(optionSet[2])}>
								<ListIconCard key={optionSet[2].title} icon={optionSet[2].image} dimensions={120} />
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		padding: 15,
		backgroundColor: bodyColor1
	},
	imageContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		height: 120
	},
	playButton: {
		width: 100,
		height: 100
	},
	optionsContainer: {
		flex: 2,
		flexDirection: "column"
	},
	row: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center"
	},
	option: {
		width: 200,
		height: 200,
		padding: 20
	}
});

export default Step5;
