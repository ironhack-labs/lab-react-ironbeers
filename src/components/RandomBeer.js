import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'

function RandomBeer() {

    const [randomBeer, setRandomBeer] = useState(null);

    useEffect(() => {
        fetchRandomBeer();
    }, []);

    const fetchRandomBeer = () => {
        axios
            .get(process.env.REACT_APP_API_BASE_URL + "/beers/random")
            .then((response) => {
                setRandomBeer(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }


    const renderRandomBeer = () => {
        return (
            <div className='beerDetails'>
                {/* <img src={beerDetails.image_url} alt={`no image of...${beerDetails.name}`}></img> */}
                <h3>{randomBeer.name}</h3>
                <h4>{randomBeer.tagline}</h4>
                <h5>{randomBeer.first_brewed}</h5>
                <h5>{randomBeer.attenuation_level}</h5>
                <p>{randomBeer.description}</p>
                <h4>{randomBeer.contributed_by}</h4>
            </div>
        );
    }


    return (
        <>
            <header>
                <NavLink to="/">Home</NavLink>
            </header>
            {
                randomBeer === null
                    ? <p>loading...</p>
                    : renderRandomBeer()
            }
            <NavLink to="/beers">back to the List of Beers</NavLink>
        </>

    )

}

export default RandomBeer;