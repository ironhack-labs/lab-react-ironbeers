import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Beers extends Component {
    render() {
        return (
            <div className="container-fluid border-bottom">
                <Link to="/beers"><img src="https://www.economist.com/sites/default/files/imagecache/640-width/images/2017/07/articles/main/20170708_wbp502.jpg" alt="Beer"></img></Link>
                <h1>All Beers</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, perspiciatis nobis consequatur quasi distinctio quia, vel ea aspernatur vero deserunt natus numquam pariatur id at commodi blanditiis voluptate iusto dolorem.</p>
            </div>
        )
    }
}