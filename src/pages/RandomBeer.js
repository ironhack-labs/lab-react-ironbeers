import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';


import { useState, useEffect } from 'react';
import axios from 'axios';

function RandomBeer() {


  const [beerObject, setBeerObject] = useState(null);

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then(res => {
        console.log(res.data)
        setBeerObject(res.data)})
      .catch(err => console.log(err))
  }, [])


    return(
        <div>
            <Navbar />

            { beerObject ? (
                <div>
                    <img src={beerObject.image_url} alt={beerObject.name} width={50} />
                    <h3>Name: {beerObject.name}</h3>
                    <p>Tagline: {beerObject.tagline}</p>
                    <p>First Brewed: {beerObject.first_brewed}</p>
                    <p>Attenuation Level: {beerObject.attenuation_level}</p>
                    <p>Description: {beerObject.description}</p>
                    <p>Contributed By: {beerObject.contributed_by}</p>


                </div>
            ) : (
                <p>loading...</p>
            )}

            
    
        </div>

      
    )
}


export default RandomBeer