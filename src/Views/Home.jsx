import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
// import BeersAPI from 'https://ih-beers-api2.herokuapp.com/beers';

export class Home extends Component {
    render() {
        return (
            <div>
                {/* {console.log(BeersAPI)} */}
                <Navbar/>
            </div>
        )
    }
}

export default Home;