import React from 'react';

import './itemDisplayer.css';

export const ItemDisplayer = (props) => {

    return(
        <div className="itemStyle">
            <p>language : {props.language}</p>
            <p>Number of project : {props.numberOfProject}</p>
            <p>from {props.from} to {props.to}</p>
        </div>
    )
}