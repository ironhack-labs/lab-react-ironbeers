import React, { Component } from 'react';
import Header from './Header';

// HERE I WILL DISPLAY A SINGLE BEER (random or upon click on a beer name from the beers list)

function Details(props) {

    console.log(props);


        
        return (
            <div>
                <Header />
                <div>
                    <h1>Know more about {props.biere.name}</h1>

                    <img src={props.biere.image_url} className="beers" alt="beer-image" />
                    <p>
                        <h4>{props.biere.name}</h4> <br />
                        {props.biere.tagline} <br />
                        First brewed: {props.biere.first_brewed} <br />
                        Attenuation level: {props.biere.attenuation_level} <br />
                        Description: {props.biere.description} <br />
                        Contributed by {props.biere.contributed_by} <br />
                        </p>
                </div>
            </div>
        )
    }


export default Details;
