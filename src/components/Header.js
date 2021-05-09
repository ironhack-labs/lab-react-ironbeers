import React, { Component } from 'react';
import './Header.css';

class Header extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <div className="header">
                    <a href="/"><h2> Home </h2></a>
                </div>
            </div>
        )
    }
}

export default Header;