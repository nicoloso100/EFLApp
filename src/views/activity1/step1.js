import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import ListIconTextSmallCard from "../../components/listIconTextSmallCard";
import { step1List, basicItems } from "./resources";
import { bodyColor1, primaryColor } from "../colors";

const Step1 = ({ navigation }) => {
	const [playing, setPlaying] = useState(false);
	const [optionPlaying, setoptionPlaying] = useState(false);
	const [dayLabel, setDayLabel] = useState("");

	const onSampleClick = () => {
		if (!optionPlaying) {
			let randomIndex = Math.floor(Math.random() * step1List.length);
			let selectedSample = step1List[randomIndex].audio;
			selectedSample.play();
			setPlaying(true);
			setDayIndex(randomIndex, 0);
			setTimeout(() => {
				setPlaying(null);
				setDayLabel("");
			}, selectedSample.getDuration() * 1000);
		}
	};

	const setDayIndex = (listIndex, subIndex) => {
		setTimeout(() => {
			setDayLabel(step1List[listIndex].days[subIndex]);
			subIndex = subIndex + 1;
			if (subIndex < step1List[listIndex].time.length) {
				setDayIndex(listIndex, subIndex);
			}
		}, step1List[listIndex].time[subIndex]);
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
					data={basicItems}
					keyExtractor={item => item.text}
					renderItem={({ item }) => <ListIconTextSmallCard item={item} disableSampleButton={disableSampleButton} />}
				/>
			) : (
				<View style={styles.sampleContainer}>
					<Text style={styles.sampleText}>{dayLabel}</Text>
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
		paddingRight: 20,
		paddingLeft: 20,
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
