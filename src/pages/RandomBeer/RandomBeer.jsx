import { useState, useEffect } from 'react'
import axios from 'axios'
import "../Beers/Beers.css"

const RandomBeer = () => {

    const [ randomBeers, setRandomBeers ] = useState([])

  useEffect(()=>{

    const getRandomBeers = async ()=>{

      const url = 'https://ih-beers-api2.herokuapp.com';
      const result = await axios.get(url + '/beers/random');
      // console.log(result.data)

      setRandomBeers(result.data)
    }
    getRandomBeers()
  },[])

  return (
    <div>
      {randomBeers.length === 0 && <p>🍻Loading...</p>}
            <div className="beer-display">
              <img src={randomBeers.image_url}  alt={randomBeers.name} />
                <div className='beer-display-data'>
                  <h2>{randomBeers.name}</h2>
                  <h5>{randomBeers.tagline}</h5>
                  <p>{randomBeers.attenuation_level?<b>Attenuation level: {randomBeers.attenuation_level}</b>:null}</p>
                  <p><b>First brewed: </b>{randomBeers.first_brewed}</p>
                  <p>{randomBeers.description}</p>
                  <h5>Created by: {randomBeers.contributed_by}</h5>
                </div>
            </div>
    </div>
  );
}


export default RandomBeer