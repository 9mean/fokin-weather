import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
  Thunderstorm: {
    iconName: 'weather-lightning',
    gradient: ['#373B44', '#4286f4'],
    title: '천둥번개',
    subtitle: '외출을 삼가주세요',
  },
  Drizzle: {
    iconName: 'weather-rainy',
    gradient: ['#4DA0B0', '#D39D38'],
    title: '소나기',
    subtitle: '우산 안챙겼다가 낭패보지마세요',
  },
  Rain: {
    iconName: 'weather-pouring',
    gradient: ['#4DA0B0', '#D39D38'],
    title: '비',
    subtitle: '우산 안챙겼다가 낭패보지마세요',
  },
  Snow: {
    iconName: 'weather-snowy',
    gradient: ['#4DA0B0', '#D39D38'],
    title: '눈',
    subtitle: '눈이 내리면 떠오르는 그녀',
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#4DA0B0', '#D39D38'],
    title: '맑음',
    subtitle: '신나게 뛰어보실까요?',
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#4DA0B0', '#D39D38'],
    title: '흐림',
    subtitle: '그대의 기분이 흐리지 않기를',
  },
  Haze: {
    iconName: 'weather-hail',
    gradient: ['#4DA0B0', '#D39D38'],
    title: '우중충',
    subtitle: '제 마음도 우중충',
  },
};
function Weather({ temp, condition }) {
  return (
    <LinearGradient
      style={styles.container}
      colors={weatherOptions[condition].gradient}
    >
      <StatusBar barStyle='light-content' />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          color='white'
          size={96}
          name={weatherOptions[condition].iconName}
        />
        <Text style={styles.temp}>{temp}o</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Snow',
    'Clear',
    'Clouds',
    'Haze',
  ]).isRequired,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    fontSize: 42,
    color: 'white',
  },
  title: {
    color: 'white',
    fontSize: 44,
    fontWeight: '300',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
});
export default Weather;
