import {
  Platform,
  PermissionsAndroid
} from 'react-native';
import fetchJSON from './fetch-json';

const APP_ID = '845e19fd682309946e6a00a4936273cd';

export default async function getweather(lat, lng) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${APP_ID}`;
  const data = await fetchJSON(url);

  return data;
}
