
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function RandomBeers() {

    
    const [random, setRandom] = useState([]);
   

  
    useEffect(() => {
      axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(res => {
        //   console.log('res.data', res.data);
          setRandom(res.data)
         
        })
        .catch(err => {
          console.log(err);
        })
    }, [])

    return (
        <div>
            <h1>Bonne connection</h1>
            {random && (
                <article>
                    <img src={random.image_url} alt={random.name} />
                    <h2>{random.name}</h2>
                    <h3>{random.tagline}</h3>
                    <h3>{random.fist_brewed}</h3>
                    <h3>{random.attenuation_level}</h3>
                    <p>{random.description}</p>
                    <h6>Contributed by: {random.contributed_by}</h6>
                    <Link to='/'>Home</Link>
                </article>
            )}


        </div>
    )
}

export default RandomBeers;