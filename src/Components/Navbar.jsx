import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import '../Styles/Navbar.css'
class Navbar extends Component {
    
    render () {
        
        return (
            <div className="Navbar">
                    {this.props.location.pathname !== "/" && 
                        <header>
                        <Link exact to="/" className="HomeBtn" onClick={this.displayNav}>HOME</Link>
                        </header>
                    }
            </div>
        )
    }

}

export default withRouter(Navbar)
