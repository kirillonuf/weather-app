import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import AnimatedCloudWithRain from './utils/animation';
import weatherOptions from './utils/weatherOptions';

const Weather = ({ temp, description, condition }) => {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.backgroundColor}>


            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={116} color={weatherOptions[condition].iconColor} />
                <Text style={[styles.text, styles.temp, { color: weatherOptions[condition].iconColor }]}>{temp.toFixed(1)}°</Text>
            </View>
            <View style={[styles.halfContainer, styles.textContainer]}>
                <Text style={[styles.textHeader, { color: weatherOptions[condition].iconColor }]}>{weatherOptions[condition].title}</Text>

                <Text style={[styles.text, { color: weatherOptions[condition].iconColor }]}>{weatherOptions[condition].subtitle}</Text>
            </View>

            <StatusBar barStyle={"light-content"} />

        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(0, 160, 163)',
        width: '100%',
    },
    backgroundColor: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader: {
        fontSize: 44,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
    textContainer: {
        alignItems: 'flex-start',
        paddingHorizontal: 10,
    },
    temp: {
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
    text: {
        fontSize: 32,
        textAlign: 'center',
        margin: 10,

    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Dust", "Smoke", "Haze", "Mist", "Clear", "Clouds"]).isRequired,
};

export default Weather;