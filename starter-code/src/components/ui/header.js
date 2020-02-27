import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {

    return (
        <Link to="/"><div className="header">
            <i className="material-icons">home</i>
        </div></Link>
    )


}

export default Header
