// weatherInfo.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WeatherInfo = ({ weatherData }) => {
  return (
    <View style={styles.marginTop20}>
      <Text style={styles.text}>The weather of {weatherData.name}</Text>
      <Text style={[styles.temperature, styles.marginTop20]}>{weatherData.main.temp} C</Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Image source={{ uri: `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png` }} style={styles.weatherIcon} />
        <Text style={[styles.text, styles.bold]}>{weatherData.weather[0].main}</Text>
      </View>
      <Text style={styles.text}>{weatherData.weather[0].description}</Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Visibility:</Text>
        <Text style={[styles.text, styles.marginLeft15]}>{weatherData.visibility} km</Text>
      </View>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Wind Speed:</Text>
        <Text style={[styles.text, styles.marginLeft15]}>{weatherData.wind.speed} m/s</Text>
      </View>
    </View>
  );
};

// Tambahkan styles yang sesuai di sini

const styles = StyleSheet.create({
  marginTop20: {
    marginTop: 20,
  },
  marginLeft15: {
    marginLeft: 15,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: '#333333',
  },
  bold: {
    fontWeight: '700',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  temperature: {
    fontWeight: '700',
    fontSize: 80,
    textAlign: 'center',
    color: '#FF4500',
  },
  weatherIcon: {
    width: 50,
    height: 50,
    margin: 10,
  },
})

export default WeatherInfo