import React from 'react';

import './itemDisplayer.css';

import { fromatTime } from "./helper";

export const ItemDisplayer = (props) => {

    const fromTimeTransform = () => fromatTime(props.from);

    const toTimeTransform = () => fromatTime(props.to);

    return(
        <div className="itemStyle">
            <p><span className="subtitle">language</span> : {props.language}</p>
            <p><span className="subtitle">Number of project</span> : {props.numberOfProject}</p>
            <p><span className="subtitle">from</span> {fromTimeTransform()} to {toTimeTransform()}</p>
        </div>
    )
}