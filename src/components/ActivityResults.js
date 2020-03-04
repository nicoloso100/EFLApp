import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ActivityRestults = ({ excercise }) => (
	<View style={styles.container}>
		{excercise.length === 0 ? (
			<Text>Aucun résultat chargé, veuillez balayer vers le bas pour actualiser.</Text>
		) : (
			<>
				<Text style={styles.text}>Résultats des activités:</Text>
				{excercise.map((item, key) => (
					<View key={key} style={styles.excerciseWrapper}>
						<Text>Exercice {key + 1}:</Text>
						<View style={styles.textWrapper}>
							<Text> - {item.correct} correcte</Text>
							<Text> - {item.incorrect} incorrecte</Text>
						</View>
					</View>
				))}
			</>
		)}
	</View>
);

const styles = StyleSheet.create({
	container: {
		margin: 10,
		padding: 15,
		backgroundColor: "#FFFFFF",
		borderRadius: 10
	},
	text: {
		fontWeight: "bold"
	},
	excerciseWrapper: {
		marginTop: 20
	},
	textWrapper: {
		marginLeft: 10
	}
});

export default ActivityRestults;
