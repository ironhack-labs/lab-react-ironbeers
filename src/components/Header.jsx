import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import HomeIcon from '../assets/home.png'
import {Link, withRouter} from  'react-router-dom'

class Header extends Component {
    
    render() {
        if (this.props.location.pathname === '/') {
            return null
        }
        return (
        <> 
            <Nav className="justify-content-center" style={{backgroundColor: "#41C4FC"}}>
                <Link to="/"><img src={HomeIcon} width="50px" alt="" /></Link>
            </Nav>
        </>
        )
    }
}

export default withRouter(Header);