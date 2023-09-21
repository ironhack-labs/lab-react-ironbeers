import React from 'react'
import { Link } from "react-router-dom"
import homeRoute from '../assets/home.png'

function Homebutton() {
    return (
        <div>
            <Link to="/">
                <img src={homeRoute} alt="" />
            </Link>
            <hr />
        </div>
    )
}

export default Homebutton