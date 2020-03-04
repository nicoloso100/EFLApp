import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { steps4 } from "./resources";
import { bodyColor2 } from "../colors";

const Step4 = () => {
	const [selected, setSelected] = useState(0);

	const select = pos => {
		setSelected(pos);
		steps4[pos].sound.play();
	};

	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<Text style={styles.title}>{steps4[selected].title}</Text>
			</View>
			<ScrollView style={styles.scroll}>
				<TouchableOpacity onPress={() => select(0)}>
					<View style={styles.field}>
						<Image style={styles.image} source={steps4[0].image}></Image>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => select(1)}>
					<View style={styles.field}>
						<Image style={styles.image} source={steps4[1].image}></Image>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => select(2)}>
					<View style={styles.field}>
						<Image style={styles.image} source={steps4[2].image}></Image>
					</View>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: bodyColor2
	},
	scroll: {
		width: "100%"
	},
	image: {
		alignSelf: "center",
		width: 150,
		height: 150,
		marginTop: 20,
		marginBottom: 20
	},
	card: {
		height: 80,
		marginBottom: 7,
		marginTop: 7,
		borderBottomColor: "black",
		borderBottomWidth: 4,
		flexDirection: "row-reverse",
		alignItems: "center",
		borderRadius: 5
	},
	title: {
		paddingRight: 20,
		flexShrink: 1,
		fontSize: 25,
		fontFamily: "Quicksand"
	},
	field: {
		borderBottomColor: "#828282",
		borderBottomWidth: 1
	}
});

export default Step4;
