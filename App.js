import React ,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ISSTrackerScreen from './screens/ISSTrackerScreen';
import MeteorTrackerScreen from './screens/MeteorTrackerScreen';
import SpaceNewsScreen from './screens/SpaceNewsScreen';
import {createStackNavigator} from "react-navigation-stack";
import {NavigationContainer} from 'react-navigation-native';

export default class App extends Component {
  render() {
    return(
      <NavigationContainer>
        <stackNavigator.Navigator
          initialRouteName = "Home"
          screenOptions = {{
            headerShown: false
          }}>
          <stackNavigator.Screen 
          name = "Home"
          component = {HomeScreen}/>
          
          <stackNavigator.Screen 
          name = "ISSTracker"
          component = {ISSTrackerScreen}/>

          <stackNavigator.Screen 
          name = "MeteorTracker"
          component = {MeteorTrackerScreen}/>

          <stackNavigator.Screen 
          name = "SpaceNews"
          component = {SpaceNewsScreen}/>
        </stackNavigator.Navigator>
      </NavigationContainer>
    )
  }
    
}

const stackNavigator = createStackNavigator()

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
