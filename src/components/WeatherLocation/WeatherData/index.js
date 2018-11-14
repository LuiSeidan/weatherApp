import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import {SNOW} from './../../../constants/Weathers';
import PropTypes from 'prop-types';
import './../../../components/styles.css';

const WeatherData = ({data}) => {
    const{temperature, weatherState, humidity, wind} = data;
    return(
    <div className='weatherDataCont'>
        <WeatherTemperature temperature={temperature} weatherState={weatherState} />
        <WeatherExtraInfo humidity={humidity} wind={wind} />
    </div>)
};

WeatherData.PropTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
};

export default WeatherData;