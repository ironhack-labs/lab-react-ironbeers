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
    <h1>Random Beer</h1>
      {randomBeers.length === 0 && <p>🍻Loading...</p>}
            <div className="beer">
              <img src={randomBeers.image_url}  alt={randomBeers.name} />
                <div className='beer-data'>
                  <h4>{randomBeers.name}</h4>
                  <h5>{randomBeers.tagline}</h5>
                  <h6>Created by: {randomBeers.contributed_by}</h6>           
                </div>
            </div>
    </div>
  );
}


export default RandomBeer