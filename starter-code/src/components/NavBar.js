import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NavBar extends Component {
    constructor() {
        super();
        this.state = { theBeer: [] };
    }

    


    render() {
        
        return (
            <div className='navBar'>
                <nav className="navbar navbar-dark bg-primary">
                    <a className="navbar-brand" href="/">
                    <img src="https://image.flaticon.com/icons/png/512/306/306173.png" width="30" height="30" alt=""/>
                    </a>
                </nav>
                </div>
        )
    }
}


export default NavBar