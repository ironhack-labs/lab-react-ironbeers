import React, { Component } from 'react';

export default class RandomBeer extends Component {
    render() {
        return (
            <div className="container-fluid border-bottom">
                <img src="http://www.kirkwoodstationbrewing.com/wp-content/uploads/2013/07/ksb-our-beers-header.jpg" style={{width:1000}} alt="Random beer"></img>
                <h1>Random Beer</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, perspiciatis nobis consequatur quasi distinctio quia, vel ea aspernatur vero deserunt natus numquam pariatur id at commodi blanditiis voluptate iusto dolorem.</p>
            </div>
        )
    }
}