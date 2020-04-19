import React from 'react';
import { Link } from 'react-router-dom';

import { rootingURL } from '../config/rootingURL';
import  './header.css';

export const Header =function(){
    return(
        <div className="headerStyle">
            <p className="headerItemStyle"><Link to={rootingURL.home}>Home</Link></p>
            <p className="headerItemStyle"><Link to={rootingURL.contact}>Contact</Link></p>
        </div>
    );
}