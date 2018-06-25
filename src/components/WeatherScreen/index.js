import React from 'react';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import getGeolocation from '../../utils/get-geolocation';
import { byCoords, byName } from '../../utils/get-weather';
import cities from '../../json/cities';
import Widget from '../Widget';
import City from '../City';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  panel: {
    flex: 1,
    height: 100,
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
  },
  cities: {
    flex: 2
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
    this.state = {
      city: null
    };
  }

  componentDidMount() {
    getGeolocation().then(({ coords }) => this.setState({ coords }));
  }

  selectCity(city) {
    this.setState({ city });
  }

  render() {
    return (
      <View style={styles.container}>
        <Widget city={this.state.city} />
        <View style={styles.cities}>
          <FlatList
            data={cities}
            renderItem={
              ({ item, index }) =>
                <City city={item} index={index} key={index} onPress={this.selectCity.bind(this, item.name)} />
            }
          />
        </View>
      </View>
    );
  }
}
