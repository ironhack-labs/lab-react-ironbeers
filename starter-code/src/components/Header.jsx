import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <Link exact to="/"><img src="/images/header.png" alt="header"/></Link>
              

  
            </div>
        )
    }
}
export default Header;