import {
  Platform,
  PermissionsAndroid
} from 'react-native';

async function requestGeolocationPermission() {
  // if (Platform.OS === 'android') {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation',
        message: 'Allows to retrieve weather data from your current location.'
      }
    );

    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (err) {
    return false;
  }
  // }
}

export default async function getGeolocation() {
  const granted = await requestGeolocationPermission();

  if (!granted) {
    return Promise.reject();
  }

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 3000
    });
  });
}
