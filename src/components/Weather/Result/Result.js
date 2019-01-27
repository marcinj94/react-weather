import React from 'react';

const Result = (props) => {

    const { date, time, city, sunrise, sunset, temperature, pressure, wind } = props.weather;

    let result = null;

    if (!props.error && city) {
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

        result = (
            <>
                <p>Dane z dnia: {date}</p>
                <p>Godzina pobrania danych: {time}</p>
                <p>Miasto: {city}</p>
                <p>Wschód słońca: {sunriseTime}</p>
                <p>Zachód słońca: {sunsetTime}</p>
                <p>Siła wiatru: {wind} m/s</p>
                <p>Temperatura: {temperature} &#176;C</p>
                <p>Ciśnienie: {pressure} hPa</p>
            </>
        )
    }

    return (
        <div className="result">
            {props.error ? `Nie ma takiego miasta jak ${city}` : result}
        </div>
    );
}

export default Result;