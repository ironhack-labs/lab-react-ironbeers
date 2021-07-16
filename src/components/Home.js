import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Home() {
    return (
        <div>
            <NavLink activeStyle={{color: "red"}} exact to="/home" >Home</NavLink>
            <NavLink activeStyle={{color: "red"}} to="/random-beer" >Random Beer</NavLink>
            <NavLink activeStyle={{color: "red"}} to="/new-beer" >New Beer</NavLink>
            <NavLink activeStyle={{color: "red"}} to="/beers-list" >Beer List</NavLink>
        </div>
    )
}
