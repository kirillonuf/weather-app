import { Alert } from 'react-native';
import axios from 'axios';

const API_KEY = 'd578ad3b54bddf91ea7950d4466eebb6';

async function getWeatherLocation({ latitude, longitude }) {

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    try {
        const { data } = await axios.get(url);
        if (!data) {
            Alert.alert("Error", "An error occurred while getting weather");
            return;
        }
        return data;
    } catch (error) {
        console.error(error);
    }

}
export default getWeatherLocation;