import React from "react";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import { navBarColor, primaryColor } from "../colors";
import { NavIcon } from "../../components/IconNav";
import { View, StatusBar } from "react-native";

const ActivityMaterialTopTabNavigator = ({ navigation }) => {
	const Activity1 = createAppContainer(
		createMaterialTopTabNavigator(
			{
				Step1: {
					screen: () => <Step1 navigation={navigation} />,
					navigationOptions: {
						tabBarIcon: () => <NavIcon />
					}
				},
				Step2: {
					screen: () => <Step2 navigation={navigation} />,
					navigationOptions: {
						tabBarIcon: () => <NavIcon />
					}
				},
				Step3: {
					screen: () => <Step3 navigation={navigation} />,
					navigationOptions: {
						tabBarIcon: () => <NavIcon />
					}
				},
				Step4: {
					screen: () => <Step4 navigation={navigation} />,
					navigationOptions: {
						tabBarIcon: () => <NavIcon />
					}
				}
			},
			{
				tabBarOptions: {
					style: {
						minWidth: 60,
						height: 45,
						backgroundColor: navBarColor
					},
					indicatorStyle: {
						height: 5,
						backgroundColor: "#B5C9E5",
						borderRadius: 5
					},
					showIcon: true,
					showLabel: false
				},
				tabBarPosition: "bottom"
			}
		)
	);
	return (
		<React.Fragment>
			<StatusBar backgroundColor={primaryColor} barStyle="light-content" />
			<Activity1 />
		</React.Fragment>
	);
};

export default ActivityMaterialTopTabNavigator;
