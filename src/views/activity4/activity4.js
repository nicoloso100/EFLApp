import {createMaterialTopTabNavigator} from 'react-navigation';
import Step1 from './step1';
import Step3 from './step3';
import Step2 from './step2';
import {navBarColor} from '../colors';
import {NavIcon} from '../../components/IconNav';

const Activity4 = createMaterialTopTabNavigator(
  {
    Step1: {
      screen: Step1,
      navigationOptions: {
        tabBarIcon: () => NavIcon,
      },
    },
    Step2: {
      screen: Step2,
      navigationOptions: {
        tabBarIcon: () => NavIcon,
      },
    },
    Step3: {
      screen: Step3,
      navigationOptions: {
        tabBarIcon: () => NavIcon,
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

export default Activity4;
