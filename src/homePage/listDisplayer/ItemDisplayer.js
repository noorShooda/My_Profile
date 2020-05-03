import React from 'react';

import './itemDisplayer.css';

export const ItemDisplayer = (props) => {

    return(<div className="itemsStyle">
        <p><span className="subtitle">School: </span>{props.school}</p>
        <p><span className="subtitle">Major: </span>{props.major}</p>
        <p><span className="subtitle">Diploma: </span>{props.diploma}</p>
        <p><span className="subtitle">from </span> {props.from} to {props.to}</p>
    </div>);
}