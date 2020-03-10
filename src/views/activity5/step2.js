import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native-elements";
import AsyncStorage from "@react-native-community/async-storage";

import Notification from "../../components/notification";
import ListIconCard from "../../components/ListIconCard";
import { step1List } from "./resources";
import { bodyColor2, primaryColor } from "../colors";
import { getResultsFifithtActivity } from "../../utils/activitiesResults";
import { getRandomPos } from "../../utils/random";

const randomArray = prevCorrect => {
	let array = getRandomPos(step1List.length);
	let response = {
		correct: Math.floor(Math.random() * 4),
		optionSet: [step1List[array[0]], step1List[array[2]], step1List[array[4]], step1List[array[6]]]
	};
	if (!response.optionSet[response.correct] || (prevCorrect && prevCorrect.text === response.optionSet[response.correct].text)) {
		return randomArray(prevCorrect);
	} else {
		return response;
	}
};

const Step2 = () => {
	const [options, setoptions] = useState(randomArray());
	const [result, setResult] = useState({
		showModal: false,
		isCorrect: null
	});
	const [correctValue, setCorrectValue] = useState(1);
	const [incorrectValue, setIncorrectValue] = useState(1);

	const { optionSet, correct } = options;

	const setShowModal = () => {
		setResult({ ...result, showModal: false });
	};

	const select = async selection => {
		let correctOption = optionSet[correct];
		if (selection.text === correctOption.text) {
			setResult({
				showModal: true,
				isCorrect: true
			});
			selection.audio.stop();
			setoptions(randomArray(correctOption));
			setCorrectValue(correctValue + 1);
			await AsyncStorage.setItem("FifithActivityFirstStepCorrect", JSON.stringify(correctValue));
		} else {
			setResult({
				showModal: true,
				isCorrect: false
			});
			isCorrect = false;
			setIncorrectValue(incorrectValue + 1);
			await AsyncStorage.setItem("FifithActivityFirstStepIncorrect", JSON.stringify(incorrectValue));
		}
	};

	useEffect(() => {
		const asyncUseEffect = async () => {
			let detailed = (await getResultsFifithtActivity()).detailed;
			setCorrectValue(detailed.firstActivityCorrect + 1);
			setIncorrectValue(detailed.firstActivityIncorrect + 1);
		};
		asyncUseEffect();
	}, []);

	return (
		<View style={styles.container}>
			<Notification showModal={result.showModal} setShowModal={setShowModal} isCorrect={result.isCorrect} />

			<View style={styles.imageContainer}>
				<TouchableOpacity
					onPress={() => {
						optionSet[correct].audio.play();
					}}>
					<Image style={styles.playButton} source={require("../../assets/img/play.png")} />
				</TouchableOpacity>
			</View>

			<View style={styles.optionsContainer}>
				<View style={styles.column}>
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
				<View style={styles.column}>
					<View style={styles.option}>
						<TouchableOpacity onPress={() => select(optionSet[2])}>
							<ListIconCard key={optionSet[2].title} icon={optionSet[2].image} dimensions={120} />
						</TouchableOpacity>
					</View>
					<View style={styles.option}>
						<TouchableOpacity onPress={() => select(optionSet[3])}>
							<ListIconCard key={optionSet[3].title} icon={optionSet[3].image} dimensions={120} />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		padding: 15,
		backgroundColor: bodyColor2
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
		flexDirection: "row"
	},
	column: {
		flex: 1,
		flexDirection: "column"
	},
	option: {
		height: "50%",
		padding: 20
	}
});

export default Step2;
