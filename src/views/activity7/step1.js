import React from "react";
import { View, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, Text } from "react-native";
import ImageZoom from "react-native-image-pan-zoom";
import { Overlay, Icon, Button } from "react-native-elements";
import { useState } from "react";

import Notification from "../../components/notification";
import { step1List } from "./resources";
import { primaryColor, bodyColor1 } from "../colors";

console.disableYellowBox = true;

const TreeImage = ({ setStyle }) => {
	return <Image enableHorizontalBounce={true} style={setStyle} source={require("../../assets/img/activity7/mapCity.png")} />;
};

const getRandomItem = last => {
	let randomPos = Math.floor(Math.random() * 8);
	if (last) {
		while (step1List[randomPos] === last) {
			randomPos = Math.floor(Math.random() * 8);
		}
		let selectedItem = step1List[randomPos];
		return selectedItem;
	} else {
		return step1List[randomPos];
	}
};

const Step1 = () => {
	const [showModal, setShowModal] = useState(false);
	const [step, setStep] = useState(getRandomItem());
	const [result, setResult] = useState({
		showModal: false,
		isCorrect: null
	});

	const onLayout = e => {
		setShowModal(false);
	};

	return (
		<View style={styles.container} onLayout={onLayout.bind(this)}>
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
					<Text style={styles.subText}>{step.answerText}</Text>
					<View style={styles.answerButtons}>
						<TouchableOpacity onPress={() => step.answer.play()}>
							<Icon raised name="play" type="font-awesome" color={primaryColor} />
						</TouchableOpacity>
						<TouchableOpacity onPress={() => setStep(getRandomItem(step))}>
							<Icon raised name="random" type="font-awesome" color={primaryColor} />
						</TouchableOpacity>
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
		flexShrink: 1,
		fontSize: 25,
		fontFamily: "Quicksand",
		paddingRight: 10
	},
	subText: {
		flexShrink: 1,
		fontSize: 25,
		fontFamily: "Quicksand",
		marginBottom: 20
	},
	input: {
		marginTop: 10,
		width: "80%",
		backgroundColor: "white",
		fontSize: 20,
		textAlign: "center"
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
		alignItems: "center",
		padding: 20
	},
	answerButtons: {
		flexDirection: "row"
	}
});

export default Step1;
