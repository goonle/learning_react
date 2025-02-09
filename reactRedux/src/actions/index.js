import axios from "axios";
import API_KEY from './credentialKey';

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// Action creator always return action
export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},nz`;
    const request = axios.get(url);

    console.log("Request: ", request);

    // And Action is always object. 
    return {
        // And Action has always type
        type: FETCH_WEATHER,
        payload: request 
    };
}