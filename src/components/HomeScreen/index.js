import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  ImageBackground,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';
import Time from '../Time';
import Logo from '../Logo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  upperregion: {
    flex: 2,
    alignItems: 'center'
  },
  innerupperregion: {
    marginTop: 120,
    backgroundColor: 'transparent',
    alignItems: 'center',
    flex: 2
  },
  lowerinnerregion: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingBottom: 20
  },
  white: {
    color: 'white'
  }
});

export default class HomeScreen extends React.Component {
  static get navigationOptions() {
    return {
      title: 'Welcome',
      header: null
    };
  }

  _navigate() {
    this.props.navigation.navigate('Weather');
  }

  render() {
    const { navigate } = this.props.navigation;
    const backgroundImage = require('../../img/bg-rain.jpeg');

    return (
      <TouchableOpacity
        style={styles.container}
        navigation={this.props.navigation}
        onPress={() => this.props.navigation.navigate('Weather')}>
        <ImageBackground
          style={styles.upperregion}
          source={backgroundImage}>
          <Logo style={styles.innerupperregion} />

          <View style={styles.lowerinnerregion}>
            <Text style={[styles.white, { fontSize: 18 }]}>Click to continue</Text>
            <Time />
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}
