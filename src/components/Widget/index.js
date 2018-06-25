import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator
} from 'react-native';
import getGeolocation from '../../utils/get-geolocation';
import { byCoords, byName } from '../../utils/get-weather';
import cities from '../../json/cities';

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    height: 100,
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center'
  },
  spinner: {
    alignSelf: 'center'
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

export default class Widget extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    getGeolocation()
      .then(({ coords }) => byCoords(coords.latitude, coords.longitude))
      .then((result) => {
        result.loading = false;
        this.setState(result)
      });
  }

  componentWillReceiveProps(props) {
    if (!this.state.loading) {
      this.setState({ loading: true });

      byName(props.city).then((result) => {
        result.loading = false;
        this.setState(result);
      });
    }
  }

  _getWidget() {
    const { weather, name, sys, main, wind } = this.state;
    const icon = weather ? weather[0].icon : null;
    const image = `http://openweathermap.org/img/w/${icon}.png`;
    const temp = main ? Math.round(main.temp) : 0;
    const country = sys ? sys.country : '';
    const windSpeed = wind ? wind.speed : '';
    const humidity = main ? main.humidity : '';
    const pressure = main ? main.pressure : '';

    return (
      <View style={styles.panel}>
        <Text>{this.state.loading}</Text>
        <Text style={styles.title} numberOfLines={1}>{name} ({country})</Text>
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
    );
  }

  _getLoader() {
    return (
      <ActivityIndicator style={styles.spinner} size="large" color="#ffffff" />
    );
  }

  render() {
    const { loading } = this.state;
    const body = loading ? this._getLoader() : this._getWidget();

    return (
      <View style={styles.panel}>
        {body}
      </View>
    );
  }
}
