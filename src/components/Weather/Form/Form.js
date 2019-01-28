import React from 'react';
import './Form.css'

const Form = (props) => {
    return (
        <form onSubmit={props.submit} className="form">
            <input className="input" onChange={props.inputChange} value={props.inputValue} type="text" placeholder="Wpisz miasto..." />
            <button className="btn">Pobierz pogodę</button>
        </form>
    );
}

export default Form;