import React from 'react';
import Loading from './Loading';
import Weather from './Weather';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = 'a441102cbede68ea3d9f0c68213c9cc4';
export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    console.log(data);
    this.setState({
      isLoading: false,
      condition: data.weather[0].main,
      temp: data.main.temp,
    });
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert('당신의 위치를 찾을수가 없습니다');
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}
