// import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ({ title, director, IMDBRating }) => {

    return (
        <header>
            <h1>A heading here</h1>
            <Link to="/">Home</Link>
            <p>Some additional information here</p>
        </header>
    );
}

export default Header;