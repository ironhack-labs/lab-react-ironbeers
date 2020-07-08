import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';


class AllBeers extends Component {

    showEachBeer() {
        return this.props.beers.map((eachBeer) =>{
            return ( 
                    <div key={eachBeer.name}>
                    <h4>{eachBeer.name}</h4>
                    <Link to={`/beers/${eachBeer._id}`}>
                    <img src={eachBeer.image_url} alt='beer_img'/>
                    </Link>
                    <p>{eachBeer.tagline}</p>
                    <p>{eachBeer.contributed_by}</p>
                    </div>    
            );
        })
    }


    render() {
        return (
            <div>
            <Header />
            {this.showEachBeer()}
            </div>
        );
    }
}

export default AllBeers;