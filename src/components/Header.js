import React from 'react'
import { Link, useLocation } from "react-router-dom"; 

export default function Header() {
    let location = useLocation()
    location = location.pathname
    return (

        location === '/' ? null :
        <div>
            <Link to="/">Home</Link>
        </div>     
    )
}
