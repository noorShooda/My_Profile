import React, { useState } from 'react';

import './popupWrapper.css';

export const PopupWrapper = (props) => {

    const [language, setLanguage]=useState(props.language);

    const changeValue =(e) => {
        setLanguage(e.target.value);
    }
    const updateValue = () =>{
        props.update(props.id,{
            language: language,
            numberOfProject: props.numberOfProject,
            duration: {
                from: props.from,
                to: props.to
            }
        });
        props.onClose();
    }
    
    return(
        <div className="overlay">
            <div className="popup">
                <p>Language: <input value={language} size="5" onChange={changeValue}/></p>
                <p>Number of Projects: {props.numberOfProject}</p>
                <button onClick={updateValue}disabled={language === props.language}>Save</button>
                <button onClick={props.onClose}>Close Popup</button>
            </div>
        </div>
    );
}