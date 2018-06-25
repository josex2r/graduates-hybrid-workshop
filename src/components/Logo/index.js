import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 120,
    marginTop: 40
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    padding: 20
  }
});

export default class Logo extends React.Component {
  render() {
    const logoImage = require('../../img/logo.png');

    return (
      <View style={this.props.style}>
        <Image
          style={styles.logo}
          source={logoImage}/>
        <Text style={styles.title}>The weather App</Text>
      </View>
    );
  }
}
