import {
  Platform,
  PermissionsAndroid
} from 'react-native';

const APP_ID = '845e19fd682309946e6a00a4936273cd';
const ENDPOINT = 'https://api.openweathermap.org/data/2.5';

async function fetchJSON(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log('OK fetching', url, data);

    return data;
  } catch (error) {
    console.log('Error fetching', url, error);
  }
}

export async function byCoords(lat, lng) {
  const url = `${ENDPOINT}/weather?lat=${lat}&lon=${lng}&units=metric&appid=${APP_ID}`;
  const data = await fetchJSON(url);

  return data;
}

export async function byName(name, country = 'es') {
  const url = `${ENDPOINT}/weather?q=${name},${country}&units=metric&appid=${APP_ID}`;
  const data = await fetchJSON(url);

  return data;
}

export default {
  byCoords,
  byName
};
