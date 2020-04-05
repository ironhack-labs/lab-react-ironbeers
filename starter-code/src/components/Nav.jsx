import React, { Component } from 'react';
import '../App.css';
import './nav.css';
import { Link } from 'react-router-dom';

class Nav extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
                 
    //     }
    // }

    render() {
        return (
          <div>
            <header className="App-header">
                <Link to="/">
                        <img src="../images/icon_house.png" alt="" className="houseImg"/>
                </Link>
            </header>
          </div>
        );
    }
}

export default Nav
