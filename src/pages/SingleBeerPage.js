import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function SingleBeerPage () {

 const [beers, setBeers] = useState([]);

 const { beerId } = useParams();
//  console.log(beerId)

    useEffect(()=> {
        axios
        .get('https://ih-beers-api2.herokuapp.com/beers')
        .then((response) => {
            // console.log(response.data)
            setBeers(response.data)
        })
    }, [])

    const foundBeer = beers.find((oneBeer) =>{
        return oneBeer._id === beerId
    })
    console.log(foundBeer)
       

    return (
      
        <div>
        <Link to='/'>Header</Link>  
            {foundBeer && (
            <div>
                <img src={foundBeer.image_url} alt="foundBeer"></img>
                <h2>{foundBeer.name}</h2> <p>{foundBeer.attenuation_level}</p>
                <h4>{foundBeer.tagline}</h4> <p>{foundBeer.first_brewed}</p>
                <p>{foundBeer.description}</p>
                <p>{foundBeer.contributed_by}</p>
            </div>
            )}
        </div>

    )
}

export default SingleBeerPage;