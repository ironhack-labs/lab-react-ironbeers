import React from 'react'
import Icon from '../img/baseline-home-24px.svg'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Link to ='/'><img src={Icon}/></Link>
        </div>
    )
}

export default NavBar
