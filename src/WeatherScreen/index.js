import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  ImageBackground,
  Image
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
});

export default class WeatherScreen extends React.Component {
  static get navigationOptions() {
    return {
      title: 'Weather'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>WEATHER SCREEN</Text>
      </View>
    );
  }
}
