import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import house from '../../assets/house.png'

export default function Header () {
   return (
    <div className="header">
        <Link to="/">
            <img className="house" src={house} alt="house" />           
        </Link>
    </div>
   )
}
