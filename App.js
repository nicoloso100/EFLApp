import Home from './src/views/home';

import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Activity1 from './src/views/activity1/activity1';
import Activity2 from './src/views/activity2/activity2';
import Activity3 from './src/views/activity3/activity3';
import Activity4 from './src/views/activity4/activity4';
import Activity5 from './src/views/activity5/activity5';
import Activity6 from './src/views/activity6/activity6';
import Activity7 from './src/views/activity7/activity7';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    Activity1: {screen: Activity1},
    Activity2: {screen: Activity2},
    Activity3: {screen: Activity3},
    Activity4: {screen: Activity4},
    Activity5: {screen: Activity5},
    Activity6: {screen: Activity6},
    Activity7: {screen: Activity7},
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

const App = createAppContainer(MainNavigator);

export default App;
