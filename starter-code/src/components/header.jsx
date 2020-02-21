import React from 'react'
import { NavLink } from "react-router-dom";


export default function header() {
    return (
        <div>
            <NavLink exact to="/"> Home </NavLink>
        </div>
    )
}
