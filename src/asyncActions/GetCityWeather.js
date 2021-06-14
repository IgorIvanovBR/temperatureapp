import axios from "axios";
import {searchWeatherAction, searchWeatherErrorAction} from "../store/SearchCityReducer";

const apiKey = 'bad46dfee1ae1125ec4faf31e63449de';

export const getCityWeather = (city) => {
  return function (dispatch){
        axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+ city +'&units=metric&appid='+ apiKey ).then((response) => {
            let arrayIndex = 0;
            let temperatureArr = [];
            let temperatureObject = [];
            for (let i = 0; i <= response.data.list.length; i+=6){
                temperatureObject[arrayIndex] = {
                    name: 'Day ' + arrayIndex,
                    temperature: response.data.list[i].main.temp,
                }
                arrayIndex++
            }
            temperatureArr[0] = temperatureObject;
            return temperatureArr;
        })
            .then((response) =>{
            dispatch(searchWeatherAction(response));
            dispatch(searchWeatherErrorAction(false));
        }).catch(function (error) {
           dispatch(searchWeatherErrorAction(true));
        })

    }
}

