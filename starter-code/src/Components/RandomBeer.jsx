import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'


class RandomBeer extends Component {
    render() {
        return (
            <div>
                
                <nav className="navbar navbar-light bg-light">
                    <Link className="navbar-brand"><img src={"/images/logo.svg"} width="30" height="30" alt=""/></Link>
                    
                </nav>
                


            </div>
        );
    }
}

export default RandomBeer;