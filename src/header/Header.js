import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillHouseFill, BsFillFolderFill } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';

import { rootingURL } from '../config/rootingURL';
import  './header.css';
import image from './myPhoto.jpg';



export const Header =function(){
    
    return(
        <div className="headerStyle">
            <div className="profileImgStyle"><img class="imageRoundedStyle" src={image} alt="nour" height="100" width="100"/></div>
            <ul class="listStyle">
            <li class="listItemStyle"><BsFillHouseFill/><Link className="headerItemStyle" to={rootingURL.home}>Home</Link></li>
            <li class="listItemStyle"><BsFillFolderFill/><Link className="headerItemStyle" to={rootingURL.portfolio}>Portfolio</Link></li>
            <li class="listItemStyle"><AiFillMail/><Link className="headerItemStyle" to={rootingURL.contact}>Contact</Link></li>
            </ul>
        </div>
    );
}