import React, { useState, useEffect, useMemo } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Bar } from "react-native-progress";
import Icon from "react-native-vector-icons/AntDesign";

const ListIconTextBigCard = ({ item, navigate, navigateRoute }) => {
	const getPercentage = useMemo(() => {
		let generalResult = item.correct + item.incorrect;
		if (generalResult !== 0) {
			return item.correct / generalResult;
		}
		return null;
	}, [item]);

	return (
		<TouchableOpacity onPress={() => navigate(navigateRoute)}>
			<View style={styles(item.direction).card}>
				<Image style={styles().image} source={item.icon} />
				<View style={styles().textContent}>
					<Text style={styles().title}>{item.tittle}</Text>
					<Text style={styles().subTittle}>{item.subTittle}</Text>
					<View style={styles().progressContainer}>
						<View style={styles().iconCont}>
							<Icon name="like1" color="#368D00" size={10} />
							<Text style={styles().textLike}>{item.correct}</Text>
						</View>
						<View style={styles().progress}>
							<Bar
								progress={getPercentage !== null ? getPercentage : 0}
								width={null}
								color="#368D00"
								unfilledColor={getPercentage !== null ? "#860000" : "#B5C9E5"}
								borderWidth={0}
							/>
						</View>
						<View style={styles().iconCont}>
							<Icon name="dislike1" color="#860000" size={10} />
							<Text style={styles().textdisLike}>{item.incorrect}</Text>
						</View>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = direction =>
	StyleSheet.create({
		card: {
			padding: 10,
			marginBottom: 7,
			marginTop: 7,
			flexDirection: direction,
			alignItems: "center",
			backgroundColor: "white",
			borderRadius: 5
		},
		image: {
			width: 100,
			height: 100
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
		subTittle: {
			fontSize: 12,
			fontFamily: "Quicksand"
		},
		progressContainer: {
			flexDirection: "row",
			alignItems: "center"
		},
		iconCont: {
			paddingLeft: 5,
			paddingRight: 5,
			display: "flex",
			flexDirection: "row",
			width: 30,
			justifyContent: "space-between",
			alignItems: "center"
		},
		textLike: {
			color: "#368D00"
		},
		textdisLike: {
			color: "#860000"
		},
		progress: {
			flex: 1,
			height: 6
		}
	});

export default ListIconTextBigCard;
