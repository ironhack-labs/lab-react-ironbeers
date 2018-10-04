import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NewBeer extends Component {
    render() {
        return (
            <div className="container-fluid border-bottom">
                <Link to="/new-beer"><img src="http://www.happylowcost.com/wp-content/uploads/2016/02/Draft-Beer.jpg" style={{width:1000}} alt="New beer"></img></Link>
                <h1>New Beer</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, perspiciatis nobis consequatur quasi distinctio quia, vel ea aspernatur vero deserunt natus numquam pariatur id at commodi blanditiis voluptate iusto dolorem.</p>
            </div>
        )
    }
}