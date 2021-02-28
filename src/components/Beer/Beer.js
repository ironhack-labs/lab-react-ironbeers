import React from 'react'

import Header from './../Header/Header'

import './../../App.css'

function Beer(props) {
    console.log(props)

    const { beerId } = props.match.params;
    const beer = props.beersData.find(b => b._id === beerId)
    console.log(beer)

    return (
        <div>
            <Header />
            <div className="container">
                <img id="beersImg" src={ beer.image_url } alt="beerImage" />
                <h1>{ beer.name }</h1>
                <p>{ beer.tagline }</p>
                <p>{ beer.first_brewed }</p>
                <p>{ beer.attenuation_level }</p>
                <p>{ beer.description }</p>
                <p>{ beer.contributed_by }</p>
            </div>
        </div>
    )
}

export default Beer;