import React, {Component} from 'react';
import './home.css';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  
    render(){
        return(
            <div className="Home">
                <div>
                    <Link to='/beers'><img src="../../images/beers1.jpeg"></img></Link>
                    <h1>All Beers</h1>
                    <p>todas las cervezas</p>
                </div>
                <div>
                    <Link to='/random'><img src="../../images/random1.jpg"></img></Link>
                    <h1>Random Beer</h1>
                    <p>cerveza aleatoria</p>
                </div>
                <div>
                    <Link to='/new-beer'><img src="../../images/beer1.jpg"></img></Link>
                    <h1>New Beer</h1>
                    <p>cerveza nueva</p>
                </div>
            </div>
        )
    }
}