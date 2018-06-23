import React from 'react';
import HomeScreen from './src/HomeScreen';
import WeatherScreen from './src/WeatherScreen';
import { createStackNavigator } from 'react-navigation';

if (typeof GLOBAL !== 'undefined') {
  // Route network requests through Chrome's native XMLHttpRequest
  GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

  // Use native Blob for native XMLHttpRequest set above
  GLOBAL.Blob = GLOBAL.originalBlob || GLOBAL.Blob;

  // Use native FileReader to read native Blob set above
  GLOBAL.FileReader = GLOBAL.originalFileReader || GLOBAL.FileReader;
}

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
