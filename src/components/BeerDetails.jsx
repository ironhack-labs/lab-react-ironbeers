import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import NavBar from '../../src/assets/navbar.png'

function BeerDetails() {
    const [beers, setBeers] = useState([])
    const {id} = useParams();
 
    const getFromApi = async () => {
        try {
          const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
          setBeers(response.data);
        } catch (error) {
          console.log(error);
        }
      };
    
useEffect(() => {
  getFromApi();
}, [])


  return (
    <div>
       <Link to={'/'}> <img src={NavBar} alt="" /> </Link>
       <div>
       <img src={beers.image_url}   alt="beer" className='beerimg' />
       <h2>{beers.name}</h2>
       <h3>{beers.tagline}</h3>
       <p>{beers.first_brewed}</p>
       <p>{beers.attenuation_level}</p>
       <p>{beers.description}</p>
       <h5>{beers.contributed_by}</h5>
    </div>
    </div>
  )
}

export default BeerDetails