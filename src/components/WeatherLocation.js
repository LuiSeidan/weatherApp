import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = () => (
    <div className='weatherLocationCont'>
        <Location city={'Buenos Aires!'}/>
        <WeatherData />
    </div>
)


export default WeatherLocation;