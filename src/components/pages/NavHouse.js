import React from 'react'
import { Link } from 'react-router-dom'
import House from '../../assets/home.png'

export default function NavHouse() {


    return (
        <header>

        <Link to="/">
        <img src={House} alt='xd' />
        </Link>
        </header>
    )
}

