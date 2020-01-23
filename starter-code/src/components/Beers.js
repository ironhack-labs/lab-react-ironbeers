import React, { Component } from 'react';
import Header from './Header';
import { Link, BrowserRouter } from 'react-router-dom';
import Beer from './Beer';

class Beers extends Component {
    render() {
        return (
            <div>
                <Link to='/'> <Header /></Link>
                {this.props.beers.map((beer, i) => {
                    return <Beer key={i} name={beer.name} tagline={beer.tagline} img={beer.image_url} />
                })
                }
            </div>
        )
    }
}
export default Beers;