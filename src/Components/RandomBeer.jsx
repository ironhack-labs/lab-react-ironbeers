import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';

function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState("")

    const getRandomBeer = async () => {
        try {
            let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`);
            setRandomBeer(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getRandomBeer();
    },[])


  return (
    <>

        <Link to={`/`}>
            <header>
                <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="return-home" className='return-home' />
            </header>
        </Link>
    <div>
        {RandomBeer && (
            <div className='beer-details'>
                <span className="beer-details-image">
                    <img src={randomBeer.image_url} alt="beer details" />
                </span>
                <div className="beer-details-info">
                    <span className="beer-details-name-level">
                        <h2>{randomBeer.name}</h2>
                        <h3>{randomBeer.attenuation_level}</h3>
                    </span>
                    <span className="beer-details-tagline-brewed">
                        <h4>{randomBeer.tagline}</h4>
                        <h6>{randomBeer.first_brewed}</h6>
                    </span>
                    <span className="beer-details-description">
                        <p>{randomBeer.description}</p>
                        <p>{randomBeer.contributed_by}</p>
                    </span>
                </div>
            </div>
        )
        }
    </div>
    </>
  )
}

export default RandomBeer