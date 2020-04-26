import React from 'react';
import { BsFillHouseFill, BsFillFolderFill } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { rootingURL } from '../../config/rootingURL';
import './navigation.css';

export const Navigation = ()=>{
    return(
        <ul class="listStyle">
            <li class="listItemStyle"><BsFillHouseFill/><Link className="headerItemStyle" to={rootingURL.home}>Home</Link></li>
            <li class="listItemStyle"><BsFillFolderFill/><Link className="headerItemStyle" to={rootingURL.portfolio}>Portfolio</Link></li>
            <li class="listItemStyle"><AiFillMail/><Link className="headerItemStyle" to={rootingURL.contact}>Contact</Link></li>
        </ul>
    )
}