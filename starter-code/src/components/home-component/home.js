import React, { Component } from 'react';
import './home.css';
import axios from 'axios';
import {Link } from 'react-router-dom';


export default class Home extends Component {
    render() {
        return (
            <div className="home">
                  <Link to="/beers">
                  <div className="beers">
                   <img src="/images/beers.png" />
                   <div className="beers-desc">
                     <h2>All Beers</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra
                     lectus, sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius.</p>
                   </div>
                 </div>
                 </Link>
                 <Link to="/random-beer">
                 <div className="random-beers">
                   <img src="/images/random-beer.png" />
                   <div className="random-beers-desc">
                     <h2>Random Beer</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra
                     lectus, sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius.</p>
                   </div>
                 </div>
                 </Link>
                 <Link to="/new-beer">
                 <div className="new-beer">
                    <img src="/images/new-beer.png" />
                    <div className="new-beer-desc">
                     <h2>New Beer</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra
                     lectus, sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius.</p>
                   </div>
                 </div>
                 </Link>
               </div>
        )
    }
}
