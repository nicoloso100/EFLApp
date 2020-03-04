import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import ListIconTextSmallCard from "../../components/listIconTextSmallCard";
import { step1Samplelist, step1Items } from "./resources";
import { bodyColor1, primaryColor } from "../colors";

const Step1 = () => {
	const [playing, setPlaying] = useState(false);
	const [optionPlaying, setoptionPlaying] = useState(false);
	const [familyLabel, setFamilyLabel] = useState("");

	const onSampleClick = () => {
		if (!optionPlaying) {
			let randomIndex = Math.floor(Math.random() * step1Samplelist.length);
			let selectedSample = step1Samplelist[randomIndex].audio;
			selectedSample.play();
			setPlaying(true);
			setFamilyIndex(randomIndex, 0);
			setTimeout(() => {
				setPlaying(null);
				setFamilyLabel("");
			}, selectedSample.getDuration() * 1000);
		}
	};

	const setFamilyIndex = (listIndex, subIndex) => {
		setTimeout(() => {
			setFamilyLabel(step1Samplelist[listIndex].days[subIndex]);
			subIndex = subIndex + 1;
			if (subIndex < step1Samplelist[listIndex].time.length) {
				setFamilyIndex(listIndex, subIndex);
			}
		}, step1Samplelist[listIndex].time[subIndex]);
	};

	const disableSampleButton = disable => {
		setoptionPlaying(disable);
	};

	return (
		<View style={styles.container}>
			<Button
				disabled={playing}
				buttonStyle={styles.ramdomButton}
				titleStyle={styles.ramdomButtonIcon}
				icon={<Icon name="volume-up" size={30} color="white" />}
				title="Tout écouter"
				onPress={() => onSampleClick()}
			/>
			{!playing ? (
				<FlatList
					style={styles.list}
					data={step1Items}
					keyExtractor={item => item.text}
					renderItem={({ item }) => (
						<View style={styles.listContainer}>
							<ListIconTextSmallCard item={item} disableSampleButton={disableSampleButton} />
						</View>
					)}
				/>
			) : (
				<View style={styles.sampleContainer}>
					<Text style={styles.sampleText}>{familyLabel}</Text>
				</View>
			)}
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
		borderRadius: 5,
		backgroundColor: primaryColor
	},
	ramdomButtonIcon: {
		marginLeft: 15
	},
	list: {
		paddingRight: 3,
		paddingLeft: 3,
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
	}
});

export default Step1;
