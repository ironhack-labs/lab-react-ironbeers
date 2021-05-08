import React from 'react'

import {Link} from 'react-router-dom'

class NavBar extends React.Component{
    
    render() {
        return(
            <div className="NavBar">
                <Link to='/' className="link">
                    <div className="nav-bar"><i className="material-icons home-icon">home</i></div>
                </Link>
            </div>
        )
    }
}

export default NavBar
