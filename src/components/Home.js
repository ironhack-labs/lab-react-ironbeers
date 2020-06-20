import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Home(){
    return (
        <ul>
        <li className="nav-item">
            <NavLink className={'nav-link'} activeClassName={'active'} to={'/beers'}>Beer list</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className={'nav-link'} activeClassName={'active'} to={'/new'}>New beer</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className={'nav-link'} activeClassName={'active'} to={'/random'}>random beer</NavLink>
        </li>
        </ul>
    )
}