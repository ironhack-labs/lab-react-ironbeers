import React from 'react'
import {Link} from 'react-router-dom'
import './Homepage.css'


class Homepage extends React.Component{

    render() {
        return(
            <div className="Homepage">
                        
                <Link to="/beers" className="link">
                    <img src="/images/beers.png" alt="beers-img" />
                    <div>All Beers</div>
                </Link>
                <Link to="/random-beer" className="link">
                    <img src="/images/random-beer.png" alt="random-beer-img" />
                    <div>Random Beer</div>
                </Link>
                <Link to="/new-beer" className="link">
                    <img src="/images/new-beer.png" alt="new-beer-img" />
                    <div>New Beer</div>
                </Link>
            </div>
        )
    }
}

export default Homepage
