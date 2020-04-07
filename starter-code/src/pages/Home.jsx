import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Nav from '../components/Nav';

class Home extends Component {
    render(){
        return(
            <div>
                <Nav />
                <Link to = '/beers'>
                    <img src="/images/beers.png" alt=""/>
                    <h3>All Beers</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet deleniti</p>
                </Link>
                <Link to = '/random-beer'>
                    <img src="/images/new-beer.png" alt=""/>
                    <h3>Random Beer</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet deleniti</p>
                </Link>
                <Link to = '/new-beer'>
                    <img src="/images/random-beer.png" alt=""/>  
                    <h3>New Beer</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet deleniti</p>
                </Link>
            </div>
        )
    }
}

export default Home;