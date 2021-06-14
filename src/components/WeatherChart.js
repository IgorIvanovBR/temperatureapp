import React from "react";
import {useSelector} from "react-redux";
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from 'recharts'


function WeatherChart(){
    const weatherData = useSelector(state => state.weather);
    const noCityFound = useSelector(state => state.error);

        return (
            <>
                {noCityFound === true ? <p className="errorCityText">Sorry, we couldn't find your city, please try again</p> : ''}
                {weatherData !== undefined && noCityFound === false?
                    <LineChart width={700} height={400} data={weatherData[0]} className="weatherChart">
                        <Line type="monotone" dataKey="temperature" stroke="red" />
                        <CartesianGrid stroke="white" />
                        <XAxis dataKey="name" stroke="white" />
                        <YAxis stroke="white" />
                    </LineChart> : ''}

            </>
        )
}

export default WeatherChart;