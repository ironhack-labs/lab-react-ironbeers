import React from 'react'
import Beers from '../assets/beers.png'
import {Header,} from '@mantine/core'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



function AllBeers() {

    const [beerList, setBeerList] = useState([])

    useEffect(() => {                                
      axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
          console.log('response.data', response.data);
          setBeerList(response.data)
        });
      
    }, [] );

  return (
    <div>
    <Header height={60} p="xs">Header</Header>
    <img src={Beers} alt='beers' />
    <div>
    <h1>List of our beers</h1>
    </div>
    {/* <div style={{ display: 'grid', gridTemplate: '1fr / 1fr 1fr', gap: '20px' }}> */}

{beerList.map((beerApi) => (
<div key={beerApi._id} className='header'>
<img src={beerApi.image_url} alt='beerPic'></img>
<h3>{beerApi.name}</h3>
<p>{beerApi.tagline}</p>
<p>{beerApi.contributed_by}</p>
<Link to={`/Beers/${beerApi._id}`}>Go to the beer details</Link>
</div>
))}
</div>
      )
}

export default AllBeers