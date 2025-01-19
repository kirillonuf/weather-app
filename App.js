import { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Alert } from 'react-native';
import Loading from './Loading';

import * as Location from 'expo-location';
import getWeatherLocation from './services/index';
import Weather from './weather';

export default function App() {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [condition, setCondition] = useState('Clear');
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    async function getCurrentLocation() {
      try {

        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }

        let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Highest });
        setLocation(location.coords);
        const data = await getWeatherLocation(location.coords);
        setWeather({ temp: data.main.temp, description: data.weather[0].description });
        setCondition(data.weather[0].main);
        // setCondition('Clouds');

      } catch (error) {
        Alert.alert("Error", "An error occurred while getting location");
      }

    }

    getCurrentLocation();

  }, []);

  let text = 'Waiting...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {


    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      {
        weather && location ?
          <Weather condition={condition} temp={weather.temp} description={weather.description} /> :
          <Loading />
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0, 160, 163)',
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    paddingTop: 50,
    fontSize: 24,
    color: 'red'
  },
  text2: {
    color: 'green',
    fontSize: 42,
    fontWeight: 'bold',
  },
  yellowView: {
    backgroundColor: "yellow",
    flex: 1,
  },
  blueView: {
    backgroundColor: "blue",
    flex: 1,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});

