import React from 'react';
import { BsFillHouseFill, BsFillFolderFill } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { rootingURL } from '../../config/rootingURL';
import './navigation.css';

export const Navigation = ()=>{
    return(
        <ul className="listStyle">
            <li className="listItemStyle"><BsFillHouseFill/><Link className="headerItemStyle" to={rootingURL.home}>Home</Link></li>
            <li className="listItemStyle"><BsFillFolderFill/><Link className="headerItemStyle" to={rootingURL.portfolio}>Portfolio</Link></li>
            <li className="listItemStyle"><AiFillMail/><Link className="headerItemStyle" to={rootingURL.contact}>Contact</Link></li>
        </ul>
    )
}