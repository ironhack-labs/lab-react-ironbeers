import React from 'react';
import {Link, Route} from 'react-router-dom';
import "./home.css";

function Beer() {
    return (
        
        <div className="beerContainer">
        <div className="subContainer">
            <img src="/images/beers.png" alt=""/>
            <Link to="/beers" className="links">All Beers</Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptas veniam distinctio, natus, perspiciatis temporibus delectus recusandae magni voluptates ipsam quisquam officia officiis praesentium possimus omnis quasi ad non hic.</p>
            </div>
            <div className="subContainer">
            <img src="/images/new-beer.png" alt=""/>
            <Link to="/new-beer" className="links">New Beers</Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptas veniam distinctio, natus, perspiciatis temporibus delectus recusandae magni voluptates ipsam quisquam officia officiis praesentium possimus omnis quasi ad non hic.</p>
            </div>
            <div className="subContainer">
            <img src="/images/random-beer.png" alt=""/>
            <Link to="/random-beer" className="links">Random Beers</Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptas veniam distinctio, natus, perspiciatis temporibus delectus recusandae magni voluptates ipsam quisquam officia officiis praesentium possimus omnis quasi ad non hic.</p>
            </div>
            </div>
    )
}


export default Beer;