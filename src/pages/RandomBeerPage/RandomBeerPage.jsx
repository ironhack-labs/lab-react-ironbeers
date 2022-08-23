import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom'
import axios from 'axios';

function RandomBeerPage() {

    const [randomBeer, setRandomBeer] = useState(null);

    const getRandomBeer = async () => {
        try {
            let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            setRandomBeer(response.data)       
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getRandomBeer()
    }, [])
    

  return (
    <div>
        <div>
                <Link to='/'><img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="Home" /></Link>
        </div>
                
    {randomBeer &&(
        <div className='randomBeer'>
        <img src={randomBeer.image_url} alt="beer image" className='beer-img'/>
        <h1>{randomBeer.name}</h1>
        <h1>{randomBeer.attenuation_level}</h1>
        <h3>{randomBeer.tagline}</h3>
        <h3>{randomBeer.first_brewed}</h3>
        <h5>{randomBeer.description}</h5>
        <h3>{randomBeer.contributed_by}</h3>
        </div>
    )}

    </div>
  )
}

export default RandomBeerPage