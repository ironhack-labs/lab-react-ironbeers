import React from 'react'
import './Home.css'
import { Route, Link, Switch } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home">
             <div className="container">
          <img src="../beers1.jpg" />
          <div>
          <Link to='/beers'><h1>All beers</h1></Link> 
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="container">
          <img src="../beer2.jpg" />
          <div>
          <Link to='/random-beer'> <h1>Random Beer</h1></Link>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="container">
          <img src="../beer3.jpg" />
          <div>
          <Link to='/new-beer'><h1>New Beer</h1></Link>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        </div>
    )
}
