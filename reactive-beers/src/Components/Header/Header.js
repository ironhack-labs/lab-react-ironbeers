import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div style={{backgroundColor:'blue'}}>
                <Link to="/" style={{textDecoration:'none',color:'white'}}>Home</Link>
            </div>
        );
    }
}
export default Header;