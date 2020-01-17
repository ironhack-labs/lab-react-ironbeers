import React, { Component } from 'react';
import Navbar from "./Navbar"
import 'bulma-helpers/css/bulma-helpers.min.css'

export class Beers extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="box column is-half is-offset-one-quarter is-paddingless">
                    <div className="has-margin-top-40 has-margin-bottom-40 has-text-left">
                        <img className="image is-fullwidth" src="/images/beers.png" alt=""/>
                        <h2 className="title is-2 has-padding-left-30 has-padding-top-10">All Beers</h2>
                        <p className="has-padding-left-30">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi quo expedita quos aliquid voluptatum? Eaque harum incidunt nam voluptate minima iusto natus itaque corporis magni qui omnis, sit iure.</p>
                    </div>
                    <div className="has-margin-top-40 has-margin-bottom-40 has-text-left">
                        <img className="image is-fullwidth" src="/images/random-beer.png" alt=""/>
                        <h2 className="title is-2 has-padding-left-30 has-padding-top-10">Random Beer</h2>
                        <p className="has-padding-left-30">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi quo expedita quos aliquid voluptatum? Eaque harum incidunt nam voluptate minima iusto natus itaque corporis magni qui omnis, sit iure.</p>
                    </div>
                    <div className="has-margin-top-40 has-margin-bottom-40 has-text-left">
                        <img className="image is-fullwidth" src="/images/new-beer.png" alt=""/>
                        <h2 className="title is-2 has-padding-left-30 has-padding-top-10">New Beer</h2>
                        <p className="has-padding-left-30">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi quo expedita quos aliquid voluptatum? Eaque harum incidunt nam voluptate minima iusto natus itaque corporis magni qui omnis, sit iure.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Beers;
