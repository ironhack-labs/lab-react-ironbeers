import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


export class Header extends Component {
    render() {
        const {pathname} = this.props.location
        if (pathname === '/') {
            return null
        } else {
            return (
                <nav className="navbar navbar-dark bg-primary">
                    <span>
                        <Link to='/'><FontAwesomeIcon style={{color: 'white'}} icon={faHome} /></Link>
                    </span>
                </nav>
            )
        }
    }
}

export default Header
