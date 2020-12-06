import React from 'react'
import { Route, Link, Switch } from 'react-router-dom';

import './Header.css'
export default function Header() {
    return (
        <div>
           <nav class="nav-bar">
           <Link to='/'> <img src='../home.svg'/></Link> 
               
            </nav>
        </div>
    )
}
