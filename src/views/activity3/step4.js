import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, View, Alert, ScrollView, RefreshControl, Text } from "react-native";
import { Icon, Button } from "react-native-elements";
import AsyncStorage from "@react-native-community/async-storage";

import { bodyColor1, primaryColor } from "../colors";
import HomeButton from "../../components/HomeButton";
import ActivityResults from "../../components/ActivityResults";
import { getResultsThirdActivity } from "../../utils/activitiesResults";

const getResults = async () => {
	let summarized = (await getResultsThirdActivity()).summarized;

	return [
		{
			id: 1,
			correct: summarized.allCorrectResults,
			incorrect: summarized.allIncorrectResults
		}
	];
};

const Step4 = ({ navigation }) => {
	const [refreshing, setRefreshing] = useState(false);
	const [allResults, setAllResults] = useState([]);

	const onRefresh = useCallback(() => {
		setRefreshing(true);
		getResults().then(data => {
			setAllResults(data);
			setRefreshing(false);
		});
	}, []);

	useEffect(() => {
		onRefresh();
	}, [onRefresh]);

	const onButtonClick = async () => {
		try {
			Alert.alert(
				"Attendez!",
				"Êtes-vous sûr de vouloir supprimer votre score?",
				[
					{
						text: "Annuler",
						style: "cancel"
					},
					{
						text: `D'accord`,
						onPress: async () => {
							await AsyncStorage.removeItem("ThirdActivityFirstStepCorrect");
							await AsyncStorage.removeItem("ThirdActivityFirstStepIncorrect");
							await AsyncStorage.removeItem("ThirdActivitySecondStepCorrect");
							await AsyncStorage.removeItem("ThirdActivitySecondStepIncorrect");
							onRefresh();
						}
					}
				],
				{ cancelable: false }
			);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<ScrollView contentContainerStyle={styles.container} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
			<View style={styles.containers}>
				<HomeButton navigate={navigation.navigate} />
				<ActivityResults excercise={allResults} />
				<Button
					buttonStyle={styles.button}
					titleStyle={styles.buttonIcon}
					icon={<Icon name="refresh" type="font-awesome" size={30} color="white" />}
					title="Réinitialiser le score"
					onPress={() => onButtonClick()}
				/>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: bodyColor1
	},
	button: {
		margin: 10,
		height: 60,
		borderRadius: 5,
		marginBottom: 40,
		backgroundColor: primaryColor
	},
	buttonIcon: {
		marginLeft: 15
	}
});

export default Step4;
