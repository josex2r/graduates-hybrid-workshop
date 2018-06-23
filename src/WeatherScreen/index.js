import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  ImageBackground,
  Image
} from 'react-native';
import getGeolocation from '../utils/get-geolocation.js';
import getWeather from '../utils/get-weather.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  panel: {
    flex: 1,
    backgroundColor: '#2196F3'
  },
  title: {
    fontSize: 30,
    color: '#ffffff',
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 15
  },
  weather: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'baseline'
  },
  temperature: {
    color: '#fff',
    fontSize: 45
  },
  unit: {
    color: '#fff',
    fontSize: 25
  },
  description: {
    marginLeft: 'auto',
    alignItems: 'flex-end',
    flexGrow: 1,
    paddingRight: 15
  },
  others: {
    color: '#fff',
    fontSize: 15
  }
});

export default class WeatherScreen extends React.Component {
  static get navigationOptions() {
    return {
      title: 'Weather'
    };
  }

  constructor() {
    super(...arguments);
    this.state = {};
  }

  componentDidMount() {
    getGeolocation().then(({ coords }) => {
      this.setState(coords);

      return getWeather(coords.latitude, coords.longitude);
    }).then((result) => {
      this.setState(result);
    });
  }

  render() {
    const { weather, name, sys, main, wind } = this.state;
    const icon = weather ? weather[0].icon : null;
    const image = `http://openweathermap.org/img/w/${icon}.png`;
    const temp = main ? Math.round(main.temp) : 0;
    const country = sys ? sys.country : '';
    const windSpeed = wind ? wind.speed : '';
    const humidity = main ? main.humidity : '';
    const pressure = main ? main.pressure : '';

    return (
      <View style={styles.container}>
        <View style={styles.panel}>
          <Text style={styles.title}>{name} ({country})</Text>
          <View style={styles.weather}>
            <Image
              source={{ uri: image }}
              style={{ width: 75, height: 60 }} />
            <Text style={styles.temperature}>{temp}</Text>
            <Text style={styles.unit}>ºC</Text>
            <View style={styles.description}>
              <Text style={styles.others}>Pressure {pressure}</Text>
              <Text style={styles.others}>Wind {windSpeed}km/h</Text>
              <Text style={styles.others}>Humidity {humidity}%</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
