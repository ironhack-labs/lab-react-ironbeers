import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import BeerCard from '../components/BeerCard'


function AllBeers() {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios({
            method : 'GET',
            url : 'https://ih-beers-api2.herokuapp.com/beers',
        }).then(({data}) => {
            setBeers(data)
        }).catch(err => console.error(err));
    }) 
  return (
    <div>
    <Navbar />
    <h1>AllBeers </h1>
    {beers.map(({_id, image_url, name, tagline, contributed_by}) => {
        return <BeerCard {... {_id, image_url, name, tagline, contributed_by}} />
    })} 
    </div>

  )
}

export default AllBeers