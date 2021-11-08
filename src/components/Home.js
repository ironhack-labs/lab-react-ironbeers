import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink to='/beers' >Beers</NavLink></li>
                    <li><NavLink to='/random-beer' >Random beer</NavLink></li>
                    <li><NavLink to='/new-beer' >New beer</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}