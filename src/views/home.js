import React, { useEffect, useState, useCallback } from "react";
import { Image, FlatList, StyleSheet, View, Text, RefreshControl, StatusBar } from "react-native";

import ListIconTextBigCard from "../components/listIconTextBigCard";
import { bodyColorHome } from "./colors";
import {
	getResultsFirstActivity,
	getResultsSecondActivity,
	getResultsThirdActivity,
	getResultsFourthtActivity,
	getResultsFifithtActivity,
	getResultsSeventhActivity
} from "../utils/activitiesResults";

const stateHandler = async () => {
	const Lesson1Correct = (await getResultsFirstActivity()).summarized.allCorrectResults;
	const Lesson1Incorrect = (await getResultsFirstActivity()).summarized.allIncorrectResults;
	const Lesson2Correct = (await getResultsSecondActivity()).summarized.allCorrectResults;
	const Lesson2Incorrect = (await getResultsSecondActivity()).summarized.allIncorrectResults;
	const Lesson3Correct = (await getResultsThirdActivity()).summarized.allCorrectResults;
	const Lesson3Incorrect = (await getResultsThirdActivity()).summarized.allIncorrectResults;
	const Lesson4Correct = (await getResultsFourthtActivity()).summarized.allCorrectResults;
	const Lesson4Incorrect = (await getResultsFourthtActivity()).summarized.allIncorrectResults;
	const Lesson5Correct = (await getResultsFifithtActivity()).summarized.allCorrectResults;
	const Lesson5Incorrect = (await getResultsFifithtActivity()).summarized.allIncorrectResults;
	const Lesson7Correct = (await getResultsSeventhActivity()).summarized.allCorrectResults;
	const Lesson7Incorrect = (await getResultsSeventhActivity()).summarized.allIncorrectResults;
	return [
		{
			icon: require("../assets/img/home/calendar.png"),
			tittle: "Les jours de la semaine",
			subTittle: "Leçon 1",
			navigate: "Activity1",
			direction: "row",
			correct: Lesson1Correct,
			incorrect: Lesson1Incorrect
		},
		{
			icon: require("../assets/img/home/sunrise.png"),
			tittle: "La journée",
			subTittle: "Leçon 2",
			navigate: "Activity2",
			direction: "row-reverse",
			correct: Lesson2Correct,
			incorrect: Lesson2Incorrect
		},
		{
			icon: require("../assets/img/home/identification.png"),
			tittle: "Comment vous vous appelez?",
			subTittle: "Leçon 3",
			navigate: "Activity3",
			direction: "row",
			correct: Lesson3Correct,
			incorrect: Lesson3Incorrect
		},
		{
			icon: require("../assets/img/home/family.png"),
			tittle: "La famille",
			subTittle: "Leçon 4",
			navigate: "Activity4",
			direction: "row-reverse",
			correct: Lesson4Correct,
			incorrect: Lesson4Incorrect
		},
		{
			icon: require("../assets/img/home/engineer.png"),
			tittle: "Les mètiers",
			subTittle: "Leçon 5",
			navigate: "Activity5",
			direction: "row",
			correct: Lesson5Correct,
			incorrect: Lesson5Incorrect
		},
		{
			icon: require("../assets/img/home/lettering.png"),
			tittle: "Verbes être et avoir",
			subTittle: "Leçon 6",
			navigate: "Activity6",
			direction: "row-reverse",
			correct: 0,
			incorrect: 0
		},
		{
			icon: require("../assets/img/home/map.png"),
			tittle: "les lieux",
			subTittle: "Leçon 7",
			navigate: "Activity7",
			direction: "row",
			correct: Lesson7Correct,
			incorrect: Lesson7Incorrect
		}
	];
};

const Home = props => {
	const [fullData, setFullData] = useState([]);
	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = useCallback(() => {
		setRefreshing(true);
		stateHandler().then(data => {
			setFullData(data);
			setRefreshing(false);
		});
	}, []);

	useEffect(() => {
		onRefresh();
	}, [onRefresh]);

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor={bodyColorHome} barStyle="light-content" />
			<View style={styles.head}>
				<Image style={styles.image} source={require("../assets/img/home/EFLALogo.png")} />
				<View style={styles.textContent}>
					<Text style={styles.title}>EFLA</Text>
					<Text style={styles.subTittle}>Français pour nous</Text>
				</View>
			</View>
			<View style={styles.body}>
				<FlatList
					style={styles.list}
					data={fullData}
					keyExtractor={item => item.tittle}
					refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => onRefresh()} />}
					renderItem={({ item }) => <ListIconTextBigCard item={item} navigate={props.navigation.navigate} navigateRoute={item.navigate} />}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: bodyColorHome
	},
	head: {
		paddingTop: 30,
		paddingBottom: 30,
		paddingLeft: 20,
		paddingRight: 20,
		flexDirection: "row",
		alignItems: "center",
		alignSelf: "center"
	},
	image: {
		width: 120,
		height: 120
	},
	textContent: {
		paddingLeft: 20
	},
	title: {
		fontSize: 50,
		fontFamily: "Quicksand",
		color: "white"
	},
	subTittle: {
		fontSize: 20,
		fontFamily: "Quicksand",
		color: "white"
	},
	body: {
		flex: 1,
		backgroundColor: bodyColorHome
	},
	list: {
		paddingRight: 20,
		paddingLeft: 20,
		marginTop: 20,
		marginBottom: 20
	}
});

export default Home;
