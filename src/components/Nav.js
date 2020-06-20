import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Nav(){
    return(
    <ul className="nav nav-pills">
        <li className="nav-item">
            <NavLink className={'nav-link'} activeClassName={'active'} to={'/'} exact={true}>Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className={'nav-link'} activeClassName={'active'} to={'/beers'}>Beer list</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className={'nav-link'} activeClassName={'active'} to={'/new'}>New beer</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className={'nav-link'} activeClassName={'active'} to={'/random'}>random beer</NavLink>
        </li>
    </ul>)
}