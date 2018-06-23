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
  },

  upperregion: {
    flex: 2,
    alignItems: 'center'
  },

  lowerregion: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f4f4f4'
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

  today: {
    fontSize: 21,
    color: 'white'
  },

  logo: {
    width: 120,
    height: 120,
    marginTop: 40
  },

  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 20,
    padding: 20
  },

  white: {
    color: 'white'
  }

});

export default class App extends React.Component {
  onActionSelected() {
    console.log('action', ...arguments);
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.upperregion}
          source={require('../img/bg-rain.jpeg')}>
          <View style={styles.innerupperregion}>
            <Image
              style={styles.logo}
              source={require('../img/logo.png')}/>
            <Text style={styles.title}>The weather App</Text>
          </View>

          <View style={styles.lowerinnerregion}>
            <Text style={[styles.white, {fontSize: 18}]}>MALMO, SWEDEN </Text>
            <Text style={[styles.white, {fontSize: 14}]}>8:40 pm</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
