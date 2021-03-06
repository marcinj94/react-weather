import React, { Component } from 'react';
import './App.css';

import Weather from './Weather/Weather';
import Background from './Background/Background';

const APIkey = "de644c6a453a70ee84ec60c65972ef45";

class App extends Component {


  state = {
    inputValue: '',
    weather: {
      date: "",
      time: "",
      city: "",
      country: '',
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
    console.log(this.state.city);
  }

  handleSubmitShowWeather = (e) => {
    e.preventDefault();


    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.inputValue}&APPID=${APIkey}&units=metric`;

    fetch(API)
      .then(resp => {
        if (resp.ok) return resp;
        throw Error("Problem z połączeniem!!!");
      })
      .then(resp => resp.json())
      .then(data => {
        const time = new Date().toLocaleTimeString();
        const date = new Date().toLocaleDateString();
        this.setState(prevState => ({
          weather: {
            date: date,
            time: time,
            city: prevState.inputValue,
            country: data.sys.country,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temperature: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed,
          },
          error: false,
        }))
      })
      .catch(error => {
        this.setState(prevState => ({
          error: true,
          weather: {
            city: prevState.inputValue
          }
        }))
        console.log(error);
      })
  }


  render() {
    return (
      <div className="wrapper">

        <Background />

        <Weather
          inputValue={this.state.inputValue}
          inputChange={this.handleInputChange}
          submit={this.handleSubmitShowWeather}
          error={this.state.error}
          weather={this.state.weather}
        />
      </div>
    );
  }
}

export default App;
