import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Random(props) {
    // console.log('the props', props)

    const [beer, setBeer] = useState(null);

    const getBeerData = () => {
    //     const beerId = props.match.params.id
        // console.log(beerId)
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then(res => {
            setBeer(res.data)
        })
        .catch(err => console.log(err))
    }

    console.log('the beer', beer)

    useEffect(() => {
        getBeerData();
      }, [])

      if (!beer) {
        return <><p>loading!!</p></>
      }

    return (
        <div class='oneBeer'>
            <img src={beer.image_url} style={{width: "100px"}}></img>
            <div class='oneBeerFirst'>
                <h2>{beer.name}</h2>
                <p>{beer.attenuation_level}</p>
            </div>
            <div class="oneBeerSecond">
                <article>{beer.tagline}</article>
                <p><strong>{beer.first_brewed}</strong></p>
            </div>
            <p>{beer.description}</p>
            <p class='contributedBy'><strong>{beer.contributed_by}</strong></p>
        </div>
    )
}