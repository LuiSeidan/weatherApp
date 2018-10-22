import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN, } from '../constants/Weathers';
import './styles.css';

const location = 'Buenos Aires, arg';
const api_key = '65afa0b7e24bdbd1161c59a70336008f';
const api_weather = `api.openweathermap.org/data/2.5/weather?q=${location}q=${api_key}
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
        };
    }
    getWeatherState = weather => {
        return SUN;
    }
     
    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const {speed} = weather_data.wind;
        const weatherState = this.getWeatherState(this.weather);

        const data = {
            humidity,
            temperature: temp,
            weatherState,
            wind: `${speed} m/s`,
        }
            return data;
    }
    handleUpdateClick = () => {
            fetch(api_weather).then( data => {
                console.log(data);
                return data.json;
            }).then( weather_data =>{
                debugger;
                const data = this.getData(weather_data);
                this.setState({data});
            });
                console.log("actualizado");
             }

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