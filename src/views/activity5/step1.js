import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

import { step1List } from "./resources";
import { primaryColor, bodyColor1 } from "../colors";

const Step1 = () => {
	const [step, setStep] = useState(0);
	const [playing, setPlaying] = useState(false);
	const listLength = step1List.length - 1;

	const nextStep = () => {
		let currentStep = step;
		if (currentStep < listLength) {
			setStep(currentStep + 1);
		} else {
			setStep(0);
		}
	};

	const prevStep = () => {
		let currentStep = step;
		if (currentStep > 0) {
			setStep(currentStep - 1);
		} else {
			setStep(listLength);
		}
	};

	const onPlay = audio => {
		audio.play();
		setPlaying(true);
		setTimeout(() => {
			setPlaying(false);
		}, audio.getDuration() * 1000);
	};

	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<View style={styles.textContent}>
					<Text style={styles.title}>{step1List[step].text}</Text>
				</View>
				<TouchableOpacity onPress={() => onPlay(step1List[step].audio)}>
					<Icon raised name="play" type="font-awesome" color={primaryColor} />
				</TouchableOpacity>
			</View>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={step1List[step].image}></Image>
			</View>
			<View style={styles.PrevNext}>
				{!playing && (
					<React.Fragment>
						<TouchableOpacity onPress={() => prevStep()}>
							<Icon raised name="arrow-left" type="font-awesome" color="#3A5EA0" />
						</TouchableOpacity>
						<TouchableOpacity onPress={() => nextStep()}>
							<Icon raised name="arrow-right" type="font-awesome" color="#3A5EA0" />
						</TouchableOpacity>
					</React.Fragment>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: bodyColor1
	},
	imageContainer: {
		flex: 1,
		justifyContent: "center"
	},
	image: {
		alignSelf: "center",
		resizeMode: "contain",
		height: "80%",
		maxWidth: 250,
		maxHeight: 250
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
	body: {
		flex: 1,
		justifyContent: "space-around"
	},
	PrevNext: {
		height: 50,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingLeft: 30,
		paddingRight: 30
	}
});

export default Step1;
