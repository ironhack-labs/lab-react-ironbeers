import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <Link to="/">
        <div style={{backgroundColor: "blue"}}>
            <img style={{width: "100px", height:"100px"}} src="../../logo192.png" alt="logo"/>
        </div>
        </Link>
    )
}

export default Header
