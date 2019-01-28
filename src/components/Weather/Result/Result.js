import React from 'react';
import './Result.css';

const Result = (props) => {

    const { date, time, city, sunrise, sunset, temperature, pressure, wind, country } = props.weather;

    let result = null;

    if (!props.error && city) {
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

        result = (
            <>
                <p>Miasto: <strong>{city}</strong></p>
                <p>Kraj: <strong>{country}</strong></p>
                <p>Godzina pobrania danych: <strong>{time}</strong></p>
                <p>Dane z dnia: <strong>{date}</strong></p>
                <p>Wschód słońca: <strong>{sunriseTime}</strong></p>
                <p>Zachód słońca: <strong>{sunsetTime}</strong></p>
                <p>Siła wiatru: <strong>{wind} m/s</strong> </p>
                <p>Temperatura: <strong>{temperature} &#176;C</strong></p>
                <p>Ciśnienie: <strong>{pressure} hPa</strong></p>
            </>
        )
    }

    return (
        <div className="result">
            {props.error ? `Nie ma takiego miasta ${city}` : result}
        </div>
    );
}

export default Result;