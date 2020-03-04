import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import ListIconTextSmallCard from "../../components/listIconTextSmallCard";
import { itemsStep1 } from "./resources";
import { primaryColor, bodyColor1 } from "../colors";

const Step1 = () => {
	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<View style={styles.textContent}>
					<Text style={styles.title}>What is your name?</Text>
				</View>
				<Icon raised style={styles.titleIcon} type="font-awesome" name="signature" color={primaryColor} />
			</View>
			<FlatList
				style={styles.list}
				data={itemsStep1}
				keyExtractor={item => item.text}
				renderItem={({ item }) => <ListIconTextSmallCard item={item} disableSampleButton={() => {}} />}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: bodyColor1
	},
	ramdomButton: {
		height: 60,
		borderRadius: 5
	},
	ramdomButtonIcon: {
		marginLeft: 15
	},
	list: {
		paddingRight: 5,
		paddingLeft: 5,
		marginTop: 20,
		marginBottom: 20
	},
	sampleContainer: {
		flex: 1,
		justifyContent: "center"
	},
	sampleText: {
		alignSelf: "center",
		fontSize: 35
	},

	card: {
		paddingBottom: 20,
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
		fontSize: 30,
		fontFamily: "Quicksand"
	},
	titleIcon: {
		fontSize: 30
	}
});

export default Step1;
