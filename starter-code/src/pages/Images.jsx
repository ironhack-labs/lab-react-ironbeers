import React, { Component } from 'react'
import { Link } from "react-router-dom";
import LoremIpsum from "./LoremIpsum";

export class Images extends Component {
    render() {
        return (
            <div className="links">
                  <Link className="linktext" exact to="/beers"> <img src="/images/beers.png" alt="beers"/><span>All Beers</span><LoremIpsum/></Link>
                  <Link className="linktext" exact to="/random-beer"> <img src="/images/random-beer.png" alt="random-beer"/><span>Random Beer</span><LoremIpsum/></Link>
                  <Link className="linktext" exact to="/new-beer"><img src="/images/new-beer.png" alt="new-beer"/><span>New Beer</span><LoremIpsum/></Link>
            </div>
        )
    }
}

export default Images
