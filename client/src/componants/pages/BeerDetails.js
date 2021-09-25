import React, { useEffect, useState } from 'react'
import Header from '../elements/Header';
import axios from "axios";


export default function BeerDetails(props) {
  const [beer, setBeer] = useState([]);


  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.id}`)
      .then(response => {
        
        setBeer(response.data)
      })
      .catch(err => console.log(err))
  }, [props.match.params.id])


    return ( 
    <div>
        <Header/>
        <div>
            <div key={beer._id}>
              <img  height='250px' src={beer.image_url} alt="beers" />
              <div>
                  <div>
                    <h3>{beer.name}</h3>
                    <p>{beer.attenuation_level}</p>
                  </div>
                  <div>
                    <p>{beer.tagline}</p>
                    <p>{beer.first_brewed}</p>
                  </div>
                  <div>
                    <p>{beer.description}</p>
                  </div>
                  <div>
                    <p>{beer.contributed_by}</p>
                  </div>
              </div>
            </div>
        </div>
    </div>
    )} 