import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Beers() {
    const [beers, setBeers] = useState([])

    const getBeers = async () => {
        try {
            let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
            setBeers(response.data);
            console.log(response.data);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBeers();
    },[])

  return (


    
    <>
    <Link to={`/`}>
        <header>
            <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="return-home" className='return-home' />
        </header>
    </Link>
      <div>
        {beers.map((beer) => {
            return (
                <div key={beer._id}>
                    <Link to={`/beers/${beer._id}`}>
                        <img src={beer.image_url} alt="" />
                    </Link>
                    <h2>{beer.name}</h2>
                    <h4>{beer.tagline}</h4>
                    <p><b>Created by: </b>{beer.contributed_by}</p>
                    <hr />
                </div>
            )
        })}
      </div>
    </>
  )
}

export default Beers