import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import { Image } from "react-native-elements";

import ListTextCard from "../../components/listTextCard";
import Notification from "../../components/notification";
import { step2List } from "./resources";
import { bodyColor2, primaryColor } from "../colors";
import { getResultsFirstActivity } from "../../utils/activitiesResults";
import { getRandomPos } from "../../utils/random";

const randomArray = prevCorrect => {
	let array = getRandomPos(step2List.length);
	let response = {
		correct: Math.floor(Math.random() * 4),
		optionSet: [step2List[array[0]], step2List[array[2]], step2List[array[4]], step2List[array[6]]]
	};
	if (!step2List[response.correct] || (prevCorrect && prevCorrect.id === step2List[response.correct].id)) {
		return randomArray(prevCorrect);
	} else {
		return response;
	}
};

const Step2 = ({ navigation }) => {
	const [options, setoptions] = useState(() => randomArray());
	const [result, setResult] = useState({
		showModal: false,
		isCorrect: null
	});
	const [correctValue, setCorrectValue] = useState(1);
	const [incorrectValue, setIncorrectValue] = useState(1);

	const { optionSet, correct } = options;

	useEffect(() => {
		const asyncUseEffect = async () => {
			let detailed = (await getResultsFirstActivity()).detailed;
			setCorrectValue(detailed.firstActivityCorrect + 1);
			setIncorrectValue(detailed.firstActivityIncorrect + 1);
		};
		asyncUseEffect();
	}, []);

	const setShowModal = () => {
		setResult({ ...result, showModal: false });
	};

	const select = async selection => {
		console.log("select " + selection);
		try {
			let isCorrect = false;
			let correctOption = optionSet[correct];
			if (selection.id === correctOption.id) {
				isCorrect = true;
				setCorrectValue(correctValue + 1);
				await AsyncStorage.setItem("FirstActivityCorrect", JSON.stringify(correctValue));
			} else {
				isCorrect = false;
				setIncorrectValue(incorrectValue + 1);
				await AsyncStorage.setItem("FirstActivityIncorrect", JSON.stringify(incorrectValue));
			}
			setResult({
				showModal: true,
				isCorrect: isCorrect
			});

			setoptions(randomArray(correctOption));
		} catch (e) {
			console.error(e);
		}
	};

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
							<ListTextCard key={optionSet[0].id} text={optionSet[0].text} />
						</TouchableOpacity>
					</View>
					<View style={styles.option}>
						<TouchableOpacity onPress={() => select(optionSet[1])}>
							<ListTextCard key={optionSet[1].id} text={optionSet[1].text} />
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.column}>
					<View style={styles.option}>
						<TouchableOpacity onPress={() => select(optionSet[2])}>
							<ListTextCard key={optionSet[2].id} text={optionSet[2].text} />
						</TouchableOpacity>
					</View>
					<View style={styles.option}>
						<TouchableOpacity onPress={() => select(optionSet[3])}>
							<ListTextCard key={optionSet[3].id} text={optionSet[3].text} />
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
