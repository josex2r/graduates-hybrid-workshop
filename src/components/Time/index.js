import React from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

const styles = StyleSheet.create({
  time: {
    color: '#000',
    fontSize: 14
  }
});

export default class Time extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      time: new Date().toLocaleString()
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }

  render() {
    return (
      <Text style={styles.time}>{this.state.time}</Text>
    );
  }
}
