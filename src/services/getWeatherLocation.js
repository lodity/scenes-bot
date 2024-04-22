import axios from 'axios';
import { URL_API_WEATHER } from '../config/constants.js';

export const getWeatherLocationCoord = async ({ latitude, longitude }) => {
    const { data } = await axios.get(URL_API_WEATHER, {
        params: {
            latitude,
            longitude,
            current_weather: true,
            hourly: 'temperature_2m,relativehumidity_2m,windspeed_10m',
        },
    });

    return data;
};
