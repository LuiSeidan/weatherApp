import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN, } from '../constants/Weathers';

const location = 'Buenos Aires, ARG';
const api_key = '93edf83618ad3eafb0fc94b439ebc198';
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}=${api_key}
`;

const data1 = {
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
};


class WeatherLocation extends Component{
    
    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data1
        }
    };

    handleUpdateClick = () => {
            fetch(api_weather);
            /*
            this.setState  ({
                data: data2
            });
            */
           console.log("actualizado");
             };

        render = () => {
            const {city, data} = this.state;
            return(
            <div className='weatherLocationCont'>
                <Location city={city}/>
                <WeatherData data={data} />
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>)
        }

    
}


export default WeatherLocation;