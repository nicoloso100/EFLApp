import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Slider, Icon } from "react-native-elements";
import { steps } from "./resources";
import { primaryColor, bodyColor1 } from "../colors";

const Step1 = () => {
	const [step, setStep] = useState(0);

	const calculateStep = value => {
		let calc = 0;
		if (value <= 0.5) {
			calc = 0;
		} else if (value > 0.5 && value < 1.5) {
			calc = 1;
		} else if (value >= 1.5 && value <= 2.5) {
			calc = 2;
		} else if (value > 2.5) {
			calc = 3;
		}
		setStep(calc);
	};

	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<View style={styles.textContent}>
					<Text style={styles.title}>{steps[step].title}</Text>
				</View>
				<TouchableOpacity onPress={() => steps[step].sound.play()}>
					<Icon raised name="play" type="font-awesome" color={primaryColor} />
				</TouchableOpacity>
			</View>
			<View style={styles.body}>
				<Image style={styles.image} source={steps[step].image}></Image>
				<Slider
					thumbTouchSize={{ width: 200, height: 200 }}
					minimumValue={0}
					maximumValue={3}
					step={0}
					value={step}
					onValueChange={value => calculateStep(value)}
				/>
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
	image: {
		alignSelf: "center",
		width: 200,
		height: 200
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
	}
});

export default Step1;
