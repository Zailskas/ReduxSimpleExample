import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import showScreen from './src/screens/showScreen';
import addScreen from './src/screens/addScreen';
import deleteScreen from './src/screens/deleteScreen';

const Tab = createBottomTabNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRoute="showMainInformation"
          tabBarOptions={{activeTintColor: '#deaf04'}}>
          <Tab.Screen name="SHOW" component={showScreen} />
          <Tab.Screen name="ADD" component={addScreen} />
          <Tab.Screen name="DELETE" component={deleteScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
