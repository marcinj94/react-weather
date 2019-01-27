import React, { Component } from 'react';
import './App.css';

import Weather from './Weather/Weather';



class App extends Component {


  state = {
    inputValue: '',
    weather: {
      date: "",
      city: "",
      sunrise: "",
      sunset: "",
      temperature: "",
      pressure: "",
      wind: '',
    },
    error: false,
  }

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
    console.log(this.state.weather.city);
  }

  handleSubmitShowWeather = (e) => {
    e.preventDefault();
    console.log('elo');
  }


  render() {
    return (
      <div className="wrapper">

        {/* <div className="bg-img">
          zdjecie
        </div> */}

        <Weather
          inputValue={this.state.inputValue}
          inputChange={this.handleInputChange}
          submit={this.handleSubmitShowWeather}
        />

        {/* <div className="weather-app">
          <form>
            <input type="text" />
            <button>Pobierz pogodę</button>
          </form>

          <div className="result">
            <p>temperatura: </p>
          </div>
        </div> */}
      </div>
    );
  }
}

export default App;
