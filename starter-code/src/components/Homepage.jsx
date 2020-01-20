import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bulma-helpers/css/bulma-helpers.min.css'

export class Homepage extends Component {
    render() {
        return (
            <div>
                <div className="column is-half is-offset-one-quarter is-paddingless">
                <Link exact to='/beers'>
                    <div className="box has-margin-top-40 has-margin-bottom-40 has-text-left is-paddingless">
                        <img className="image is-fullwidth" src="/images/beers.png" alt=""/>
                        <h2 className="title is-2 has-padding-left-30 has-padding-top-10">All Beers</h2>
                        <p className="has-padding-left-30 has-padding-bottom-30">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi quo expedita quos aliquid voluptatum? Eaque harum incidunt nam voluptate minima iusto natus itaque corporis magni qui omnis, sit iure.</p>
                    </div>
                </Link>
                <Link exact to='/beers/detail/random'>
                    <div className="box has-margin-top-40 has-margin-bottom-40 has-text-left is-paddingless">
                        <img className="image is-fullwidth" src="/images/random-beer.png" alt=""/>
                        <h2 className="title is-2 has-padding-left-30 has-padding-top-10">Random Beer</h2>
                        <p className="has-padding-left-30 has-padding-bottom-30">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi quo expedita quos aliquid voluptatum? Eaque harum incidunt nam voluptate minima iusto natus itaque corporis magni qui omnis, sit iure.</p>
                    </div>
                </Link>
                <Link exact to='/beers/new'>
                    <div className="box has-margin-top-40 has-margin-bottom-40 has-text-left is-paddingless">
                        <img className="image is-fullwidth" src="/images/new-beer.png" alt=""/>
                        <h2 className="title is-2 has-padding-left-30 has-padding-top-10">New Beer</h2>
                        <p className="has-padding-left-30 has-padding-bottom-30">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi quo expedita quos aliquid voluptatum? Eaque harum incidunt nam voluptate minima iusto natus itaque corporis magni qui omnis, sit iure.</p>
                    </div>
                </Link>
                </div>
            </div>
        );
    }
}

export default Homepage;
