import React from 'react';
import Form from './Form/Form';
import Result from './Result/Result'

const Weather = (props) => {

    return (
        <div className="weather-app">
            <Form
                inputValue={props.inputValue}
                inputChange={props.inputChange}
                submit={props.submit}
            />
            <Result />
        </div>
    );
}

export default Weather;