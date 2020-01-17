import React, { Component } from 'react';
import Navbar from "./Navbar"
import "./Beers.css"
import AllBeers from "./pages/AllBeers"
// import RandomBeer from "./pages/RandomBeer"
// import NewBeer from "./pages/NewBeer"
import 'bulma-helpers/css/bulma-helpers.min.css'

export class Beers extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="column is-half is-offset-one-quarter is-paddingless">
                    <div className="box has-margin-top-40 has-margin-bottom-40 has-text-left is-paddingless">
                        <img className="image is-fullwidth" src="/images/beers.png" alt=""/>
                        <h2 className="title is-2 has-padding-left-30 has-padding-top-10">All Beers</h2>
                        <p className="has-padding-left-30 has-padding-bottom-30">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi quo expedita quos aliquid voluptatum? Eaque harum incidunt nam voluptate minima iusto natus itaque corporis magni qui omnis, sit iure.</p>
                    </div>
                    <div className="box has-margin-top-40 has-margin-bottom-40 has-text-left is-paddingless">
                        <img className="image is-fullwidth" src="/images/random-beer.png" alt=""/>
                        <h2 className="title is-2 has-padding-left-30 has-padding-top-10">Random Beer</h2>
                        <p className="has-padding-left-30 has-padding-bottom-30">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi quo expedita quos aliquid voluptatum? Eaque harum incidunt nam voluptate minima iusto natus itaque corporis magni qui omnis, sit iure.</p>
                    </div>
                    <div className="box has-margin-top-40 has-margin-bottom-40 has-text-left is-paddingless">
                        <img className="image is-fullwidth" src="/images/new-beer.png" alt=""/>
                        <h2 className="title is-2 has-padding-left-30 has-padding-top-10">New Beer</h2>
                        <p className="has-padding-left-30 has-padding-bottom-30">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi quo expedita quos aliquid voluptatum? Eaque harum incidunt nam voluptate minima iusto natus itaque corporis magni qui omnis, sit iure.</p>
                    </div>
                </div>
                {/* <AllBeers/>
                <RandomBeer/>
                <AddBeer/> */}
            </div>
        );
    }
}

export default Beers;
