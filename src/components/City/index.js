import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  city: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  view: {
    flex: 1,
    flexDirection: 'row'
  },
  index: {
    flex: 1
  },
  name: {
    flex: 8
  }
});

export default class City extends React.Component {
  render() {
    return (
      <TouchableHighlight style={styles.city} onPress={this.props.onPress}>
        <View style={styles.view}>
          <Text style={styles.index}>#{this.props.index}</Text>
          <Text style={styles.name}>{this.props.city.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
