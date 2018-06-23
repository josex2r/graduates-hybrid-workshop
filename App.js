import React from 'react';
import HomeScreen from './src/HomeScreen';
import WeatherScreen from './src/WeatherScreen';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Weather: WeatherScreen
}, {
  initialRouteName: 'Home'
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
