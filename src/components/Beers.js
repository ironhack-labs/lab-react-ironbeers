import React from 'react'
import Header from './Header'
import {useState, useEffect} from 'react';
import axios from 'axios';


export default function Beers() {
    const [beerList, setBeerList] = useState([]);
    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => {
          // console.log(response.data)
          setBeerList(response.data)
        })
        .catch(err => console.log(err))
      }, []);
    


    return (
        <div>
           < Header /> 
           <div>
           {beerList.map(beer => {
               return (
                    <div>
                    <img src={beer.image_url} alt={beer.name} width="60"/>
                    <h3>{beer.name}</h3>
                    <h3>{beer.tagline}</h3>
                    <h3>{beer.contributed_by}</h3>
                    </div>
               )  
        })}
           </div>
        </div>
    )
}
