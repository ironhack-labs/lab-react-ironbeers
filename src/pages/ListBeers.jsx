import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListBeers() {
    const [beers, setBeers] = useState([]);

    const getBeers = async () => {
        try {
            let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers`)

            setBeers(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBeers();
    }, []);

  return (
    <div>
    <h3>List of Beers</h3>
    {beers.map((beers) => {
        return (
            <Link key={beers._id}>
            <div>
            <img src={beers.image_url} alt="" />
            <h2>{beers.name}</h2>
            <h4>{beers.tagline}</h4>
            <p>{beers.contributed_by}</p>
            </div>
            </Link>
        )
    })}
    </div>
  )
}

export default ListBeers