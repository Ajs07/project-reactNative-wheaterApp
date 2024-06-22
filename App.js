import React, {useState} from 'react'
import axios from 'axios'
import { BASE_URL, API_KEY } from './src/constant'
import { View, StyleSheet, ActivityIndicator   } from 'react-native'
import WeatherInfo from './src/components/wheaterInfo'
import WeatherSearch from './src/components/wheaterSearch'

const App = () => {
  const [weatherData,setWeatherData] = useState('')
  // Definisikan state status untuk berisikan nilai berupa string seperti 'loading', 'success' dan 'error'
  const [status, setStatus] = useState('')

  //Definisikan function renderComponent
  const renderComponent = () => {
    switch (status) {
      case 'loading':
        return <ActivityIndicator size="large"/>
        case 'succes':
          return <WeatherInfo weatherData={weatherData} />
        case 'error':
          return (
            <Text>
              Something went wrong. Please try again with a correct city name.
            </Text>
          )
    
      default:
        return <Text>Please search for a city to get started.</Text>;
    }
  }

  const searchWeather = (location) => {
    setStatus('loading')
    axios
      .get(`${BASE_URL}?q=${location}&appid=${API_KEY}`)
      .then((response) => {
        const data = response.data
        data.visibility /= 100
        data.visibility = data.visibility.toFixed(2)
        data.main.temp -= 273.15 // Konversi Kelvin ke Celcius
        data.main.temp = data.main.temp.toFixed(2)
        setWeatherData(data)
        setStatus('success')
      })
      .catch((error) => {
        console.log(error);
        setStatus('error')
      })
  }

  return (
    <View style={styles.container}>
    <WeatherSearch searchWeather={searchWeather} />
    {weatherData && <WeatherInfo weatherData={weatherData} />}
    {/* <View style={styles.marginTop20}>
        {renderComponent()}
      </View> */}
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  marginTop20: {
    margin: 20,
  }
})

export default App