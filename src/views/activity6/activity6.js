import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation';
import Step1 from './step1';
import Step2 from './step2';
import {navBarColor} from '../colors';
import {NavIcon} from '../../components/IconNav';

const Activity6 = createMaterialTopTabNavigator(
  {
    Step1: {
      screen: Step1,
      navigationOptions: {
        tabBarIcon: () => <NavIcon />,
      },
    },
    Step2: {
      screen: Step2,
      navigationOptions: {
        tabBarIcon: () => <NavIcon />,
      },
    },
  },
  {
    tabBarOptions: {
      style: {
        minWidth: 60,
        height: 45,
        backgroundColor: navBarColor,
      },
      indicatorStyle: {
        height: 5,
        backgroundColor: '#B5C9E5',
        borderRadius: 5,
      },
      showIcon: true,
      showLabel: false,
    },
    tabBarPosition: 'bottom',
  },
);

export default Activity6;
