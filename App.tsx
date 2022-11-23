import {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MasoryLayout from './src/screens/MasoryLayout';
import Home from './src/screens/Home';
import CollapsableHeader from './src/screens/CollapsableHeader';

const BottomTab = createMaterialBottomTabNavigator();

function BottomTabs() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      activeColor="#fb8500"
      inactiveColor="#d6ccc2"
      barStyle={{backgroundColor: '#f8edeb'}}>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Masory Layout" component={MasoryLayout} />
      <BottomTab.Screen name="Colappsable Header" component={CollapsableHeader} />
    </BottomTab.Navigator>
  );
}
const App: FC = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default App;
