import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';


class Beers extends Component {
 

        render() {
return (
    <div>
    <Header />
    {this.props.beers.map((eachBeer, index) =>{
        console.log(eachBeer, 'eachbeer es esto')
    return (
        <div className="all-beers-container">
            <div className="all-beers-detail" key={index}>
                <div>
                    <img src={eachBeer.image_url} alt="beer" />
                </div>
                <div>
                    <Link to={`/beers/${eachBeer.id}`}>{eachBeer.name}</Link>
                    <p>{eachBeer.tagline}</p>
                    <p>{eachBeer.contributed_by}</p>
                </div>
            </div>
        </div>
    );
    })}
    </div>
);
}};

export default Beers;