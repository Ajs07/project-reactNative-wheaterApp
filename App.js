import React from 'react'
import { View, StyleSheet } from 'react-native'
import WeatherInfo from './src/components/wheaterInfo'
import WeatherSearch from './src/components/wheaterSearch'

const App = () => {
  return (
    <View style={styles.container}>
      <WeatherSearch />
      <WeatherInfo />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})

export default App