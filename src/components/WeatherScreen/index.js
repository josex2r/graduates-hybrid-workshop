import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontSize: 25
  }
});

export default class WeatherScreen extends React.Component {
  static get navigationOptions() {
    return {
      title: 'Weather'
    };
  }

  navigate() {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>Weather screen</Text>
        <Button title="Go To Home" onPress={() => this.navigate()} />
      </View>
    );
  }
}
