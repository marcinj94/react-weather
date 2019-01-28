import React from 'react';
import './Background.css'

const Background = () => {
    return (
        <div className="backgroundWrapper">
            <h1 className="backgroundWrapper__title">Pogoda</h1>
            <p className="backgroundWrapper__description">Najważniejsze informacje pogodowe dla twojego miasta</p>
        </div>
    );
}

export default Background;