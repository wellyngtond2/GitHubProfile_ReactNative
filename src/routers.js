import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainScreen from './pages/Main';
import UserScreen from './pages/User';

const MainNavigator = createStackNavigator(
  {
    Main: { screen: MainScreen },
    User: { screen: UserScreen },
  },
  {
    headerLayoutPreset: 'center',
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#7159c1',
      },
      headerTintColor: '#FFF',
    },
  }
);

const App = createAppContainer(MainNavigator);

export default App;
