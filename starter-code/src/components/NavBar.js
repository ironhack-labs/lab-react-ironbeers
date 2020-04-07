import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="navigation-bar">
                <Link to="/">
                    <nav><img src="https://www.iconsdb.com/icons/preview/white/house-xxl.png"></img></nav>
                </Link>
                
            </div>
        )
    }
}

export default NavBar
