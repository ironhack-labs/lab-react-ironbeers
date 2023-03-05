/* import React , { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function RandomBeer() {


    const [ randomBeer, setRandomBeer] = useState(null) 

 
    const getRandomBeer = async () => {
        try {
            let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')

            setRandomBeer(response.data)
            console.log('gets random API beer')
        } catch (error){
            console.log(error)
        }
    } 


    useEffect(() => {
        getRandomBeer();
    }, [])

  return (
    <div>
        
        <img src="https://bisonbrew.b-cdn.net/wp-content/uploads/2020/10/Best-Belgian-Beers.png"alt="belgian-beer"/>
        <h1>Beers </h1>

            {randomBeer.map((beer) => (
            <div key={beer._id} className="beer">
                <img  src={beer.image_url} alt="beer" width="50px"/>
                <h3>{beer.name}</h3>
                <h5>{beer.tagline}</h5>
                <p>Contributed by: {beer.contributed_by}</p>
                <Link to={`/random-beer/${beer._id}`}>See details</Link>
            </div>
      ))}
    </div>
  )
}
export default RandomBeer */