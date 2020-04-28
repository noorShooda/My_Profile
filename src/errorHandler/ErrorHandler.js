import React from 'react';

import './errorHandler.css';

export const ErrorHandler = (props) => {

    return(
        <p className="errorStyle">{props.error}</p>
    );
}