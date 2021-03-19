import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom'

const BeerDetails = (props) => {

    const beerID = props.match.params.id
    const foundBeer = props.beers.find(beer => beer._id === beerID )




    return (

        <div>
            < Navbar/>
      
                <div className="details__box">
                    <div className="details__image-box">
                        <img className="details__image" src={foundBeer.image_url} alt="beer"/>
                    </div>
                    <div className="details__info-box">


                    <h1>{foundBeer.name}</h1>
                    <h2>{foundBeer.tagline}</h2>
                    <div className="details__small-details">

                        <p>first brewed: {foundBeer.first_brewed}</p>    
                        <p>{foundBeer.abv}% ABV</p>
                        
                    </div>
                    <p>{foundBeer.description}</p>
                    <p><b>{foundBeer.contributed_by}</b></p>

                    </div>

                </div>

            <Link exact to="/beer" className="nav__link">
                <nav className="navbar">
                        Back to the beer
                </nav>
            </Link>   
        </div>

    )
}

export default BeerDetails
