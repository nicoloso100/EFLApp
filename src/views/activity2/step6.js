import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from "react-native";
import { Icon, Button } from "react-native-elements";
import AsyncStorage from "@react-native-community/async-storage";

import Notification from "../../components/notification";
import { steps6 } from "./resources";
import { primaryColor, bodyColor2 } from "../colors";
import HomeButton from "../../components/HomeButton";
import { getResultsSecondActivity } from "../../utils/activitiesResults";
import { getRandomPos } from "../../utils/random";

const randomArray = () => {
	let array = getRandomPos(steps6.length);
	return [steps6[array[0]], steps6[array[1]], steps6[array[2]], steps6[array[3]]];
};

const RandomInput = ({ index, array, setArray }) => {
	const onChange = text => {
		let answer = [...array];
		answer[index] = { ...answer[index], answer: text };
		setArray(answer);
	};

	return (
		<TextInput
			maxLength={1}
			autoCapitalize="none"
			style={styles.input}
			selectTextOnFocus={true}
			value={array[index].answer}
			onChangeText={text => onChange(text)}
		/>
	);
};

const getSampleArray = text => {
	let array = [];
	let answers = [];
	for (let i = 0; i < 5; i++) {
		let pos = Math.floor(Math.random() * text.length);
		if (!array.includes(pos) && text[pos] !== " ") {
			array.push(pos);
			answers.push({ pos: pos, correctAnswer: text[pos], answer: "" });
		}
	}
	return answers;
};

const Step6 = ({ navigation }) => {
	const [step, setStep] = useState(0);
	const [steps, setSteps] = useState(randomArray());
	const [array, setArray] = useState(getSampleArray(steps[step].text));
	const [result, setResult] = useState({
		showModal: false,
		isCorrect: null
	});
	const [correctValue, setCorrectValue] = useState(1);
	const [incorrectValue, setIncorrectValue] = useState(1);

	useEffect(() => {
		const asyncUseEffect = async () => {
			let detailed = (await getResultsSecondActivity()).detailed;
			setCorrectValue(detailed.thirdActivityCorrect + 1);
			setIncorrectValue(detailed.thirdActivityIncorrect + 1);
		};
		asyncUseEffect();
	}, []);

	const onButtonClick = () => {
		let isCorrect = false;
		if (checkAnswers()) {
			isCorrect = true;
			messageText = "bravo !";
			let newStep = step + 1;
			if (newStep <= 3) {
				setStep(newStep);
				setArray(getSampleArray(steps[newStep].text));
			} else {
				setStep(0);
				let newArray = randomArray();
				setSteps(newArray);
				setArray(getSampleArray(newArray[0].text));
			}
		} else {
			isCorrect = false;
		}
		setResult({
			showModal: true,
			isCorrect: isCorrect
		});
	};

	const setShowModal = () => {
		setResult({ ...result, showModal: false });
	};

	const checkAnswers = () => {
		let correct = true;
		array.forEach(element => {
			if (element.correctAnswer.toLowerCase() !== element.answer.toLowerCase()) {
				correct = false;
			}
		});
		return correct;
	};

	return (
		<View style={styles.container}>
			<HomeButton navigate={navigation.navigate} />
			<Notification showModal={result.showModal} setShowModal={setShowModal} isCorrect={result.isCorrect} />

			<View style={styles.card}>
				<View style={styles.textContent}>
					<Text style={styles.title}>{steps[step].title}</Text>
				</View>
				<TouchableOpacity onPress={() => steps[step].sound.play()}>
					<Icon raised name="play" type="font-awesome" color={primaryColor} />
				</TouchableOpacity>
			</View>

			<View style={styles.body}>
				{[...steps[step].text].map((letter, letterIndex) => {
					let find = array.findIndex(element => element.pos === letterIndex);
					if (find !== -1) {
						return <RandomInput key={letterIndex} index={find} array={array} setArray={setArray} />;
					} else {
						return (
							<Text style={styles.letter} key={letterIndex}>
								{letter}
							</Text>
						);
					}
				})}
			</View>

			<Button
				buttonStyle={styles.button}
				titleStyle={styles.buttonIcon}
				icon={<Icon name="check-square" type="font-awesome" size={30} color="white" />}
				title="vérifier"
				onPress={() => onButtonClick()}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: bodyColor2
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
		height: 60,
		borderRadius: 5,
		marginBottom: 40,
		backgroundColor: primaryColor
	},
	buttonIcon: {
		marginLeft: 15
	},
	body: {
		marginTop: 40,
		marginBottom: 60,
		flexDirection: "row",
		flexWrap: "wrap"
	},
	word: {
		flexDirection: "row",
		marginLeft: 10
	},
	letter: {
		fontSize: 25
	},
	input: {
		backgroundColor: "#DCE5F1",
		fontSize: 25,
		textAlign: "center",
		paddingTop: 0,
		paddingBottom: 0,
		paddingRight: 1,
		paddingLeft: 1,
		marginRight: 1,
		marginLeft: 1
	}
});

export default Step6;
