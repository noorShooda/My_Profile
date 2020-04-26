import React from 'react';

import  './header.css';
import image from './myPhoto.jpg';
import { Navigation } from './navigation/Navigation';
export const Header =function(){
    
    return(
        <div className="headerStyle">
            <div className="profileImgStyle"><img className="imageRoundedStyle" src={image} alt="nour" height="100" width="100"/></div>
            <Navigation/>
        </div>
    );
}