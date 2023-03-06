import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
const apiURL = 'https://ih-beers-api2.herokuapp.com/beers'

function BeerDetails() {
    const {id} = useParams();
    const [beer, setBeer] = useState(null);

    const getBeer = async() => {
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
            setBeer(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBeer();
    }, []);

  return (
    <div>
        {beer && (
            <>
              <img src={beer.image_url} alt="" />
              <h3>{beer.name}</h3>
              <h6>{beer.tagline}</h6>
              <p><strong>First brewed:</strong>{beer.first_brewed}</p> 
              <p><strong>Attenuation level:</strong>{beer.attenuation_level}</p>
              <p>{beer.description}</p>
              <p><strong>Created by:</strong>{beer.contributed_by}</p>

            </>
        )}
    </div>
  )
}

export default BeerDetails