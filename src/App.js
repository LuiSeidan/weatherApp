import React, { Component } from 'react';
import './App.css';
import WeatherLocation from './components/WeatherLocation';
import Location from './components/WeatherLocation/Location';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Location></Location>
        <WeatherLocation></WeatherLocation>
      </div>
    );
  }
}

export default App;
