import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component{

    render(){
        return(
            <div>
            <img src="/images/beers.png" alt="allBeers"></img>
            <h2><Link to="/beers">All Beers</Link></h2>
            <img src="/images/random-beer.png" alt="allBeers"></img>
            <h2><Link to="/random">Random Beer</Link></h2>
            <img src="/images/random-beer.png" alt="allBeers"></img>
            <h2><Link to="/new-beer">New Beer</Link></h2>
            </div>
        )
    }
}

export default HomePage