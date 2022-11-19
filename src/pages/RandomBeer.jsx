import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import {Link} from "react-router-dom"

function RandomBeer() {
    const [randBeer, setRandBeer] = useState({})


    const getRandomBeer = async() =>{
        try {
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random");
            setRandBeer(response.data);
            
        } catch (error) {
            console.log(error)
        }  
    }

    useEffect(()=>{getRandomBeer()}, []);
    console.log(randBeer)

  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className='card beer'>
          <div className='img-box'>
            <img src={randBeer.image_url} alt="randBeer" className='beer-img'/>
          </div>
          <div>
            <h2>{randBeer.name}</h2>
            <h4>{randBeer.tagline}</h4>
            <p>{randBeer.first_brewed}</p>
            <p>{randBeer.attenuation_level}</p>
            <p>{randBeer.description}</p>
            <p><b>Contributed By:</b> {randBeer.contributed_by}</p>
            <Link to="/" className="go-back-link">Go back</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default RandomBeer