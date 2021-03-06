import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';
import Step5 from './step5';
import Step6 from './step6';
import Step7 from './step7';
import {navBarColor} from '../colors';
import {NavIcon} from '../../components/IconNav';

const Activity1 = createMaterialTopTabNavigator(
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
    Step3: {
      screen: Step3,
      navigationOptions: {
        tabBarIcon: () => <NavIcon />,
      },
    },
    Step4: {
      screen: Step4,
      navigationOptions: {
        tabBarIcon: () => <NavIcon />,
      },
    },
    Step5: {
      screen: Step5,
      navigationOptions: {
        tabBarIcon: () => <NavIcon />,
      },
    },
    Step6: {
      screen: Step6,
      navigationOptions: {
        tabBarIcon: () => <NavIcon />,
      },
    },
    Step7: {
      screen: Step7,
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

export default Activity1;
