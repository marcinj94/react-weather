import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={props.submit}>
            <input onChange={props.inputChange} value={props.inputValue} type="text" />
            <button>Pobierz pogodę</button>
        </form>
    );
}

export default Form;