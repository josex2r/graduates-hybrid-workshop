import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Time from '../Time';

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontSize: 25
  }
});

export default class HomeScreen extends React.Component {
  static get navigationOptions() {
    return {
      title: 'Welcome',
      header: null
    };
  }

  navigate() {
    this.props.navigation.navigate('Weather');
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>Home screen</Text>
        <Button title="Go To Weather" onPress={() => this.navigate()} />
        <Time />
      </View>
    );
  }
}
