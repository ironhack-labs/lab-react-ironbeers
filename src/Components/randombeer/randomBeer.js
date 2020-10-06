import React, { Component } from 'react'
import './randomBeer.css'
import {Route, Link} from 'react-router-dom';


export default class RandomBeer extends Component {
    render() {
        return (
            <div>
               <header className='home-header'>
               <Route>
                <Link to ='/'>
                <img className="home-icon" src='./home.png' alt=''/>
                </Link>
               </Route>
               </header>
            </div>
        )
    }
}
