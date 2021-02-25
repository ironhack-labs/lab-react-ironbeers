import React from 'react'
import { Link } from 'react-router-dom'
import casa from '../assets/casa.png'
import './NavBar.css'


const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-primary">
                <Link to="/" className="navbar-brand">
                    <img src={casa} alt="casa" />
                </Link>
            </nav>
        </>


        // <Route>
        //     <Link></Link>
        // </Route>
    )
}
export default NavBar
