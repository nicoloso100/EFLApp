import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import { primaryColor } from "../views/colors";

const ListIconTextSmallCard = props => {
	const { item } = props;
	const [playEffect, setPlayEffect] = useState(false);

	const playingAudio = () => {
		item.audio.play();
		setPlayEffect(true);
		props.disableSampleButton(true);
		setTimeout(() => {
			setPlayEffect(false);
			props.disableSampleButton(false);
		}, item.audio.getDuration() * 1000);
	};

	return (
		<View style={styles(playEffect).card}>
			<TouchableOpacity
				onPress={() => {
					playingAudio();
				}}>
				<Icon raised name="play" type="font-awesome" color={primaryColor} />
			</TouchableOpacity>
			<View style={styles().avatarContainer}>
				{item.avatar && <Image style={styles().listImage} source={item.avatar} />}
				<View style={styles().textContent}>
					<Text style={styles().title}>{item.text}</Text>
					<Text style={styles().subTittle}>{item.subText}</Text>
				</View>
			</View>
		</View>
	);
};

const styles = playEffect =>
	StyleSheet.create({
		card: {
			marginBottom: 7,
			marginTop: 7,
			flexDirection: "row-reverse",
			alignItems: "center",
			backgroundColor: playEffect ? "#90B6ED" : "white",
			borderRadius: 5
		},
		image: {
			width: 100,
			height: 100
		},
		textContent: {
			paddingLeft: 20
		},
		title: {
			flexShrink: 1,
			fontSize: 25,
			fontFamily: "Quicksand"
		},
		subTittle: {
			fontSize: 12,
			fontFamily: "Quicksand"
		},
		listImage: {
			width: 70,
			height: 70
		},
		avatarContainer: {
			flex: 1,
			flexDirection: "row"
		}
	});

export default ListIconTextSmallCard;
