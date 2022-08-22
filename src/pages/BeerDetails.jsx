import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function BeerDetails() {
    const [beers, setBeers] = useState([])
    const { id } = useParams();

    const getBeer = async() => {
        try {
            let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            setBeers(response.data)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getBeer();
    }, [id]);

  return (
    <div>
        {beers && (
            <>
            <img src={beers.image_url} alt="" />
            <h2>{beers.name}</h2>
            <h4>{beers.tagline}</h4>
            <p>{beers.description}</p>
            <p>{beers.firstBrewed}</p>
            <p>{beers.brewersTips}</p>
            <p>{beers.attenuationLevel}</p>
            <p>{beers.contributed_by}</p>
            </>
        )}

        <Link to={'/'}>Back</Link>
    </div>
  )
}

export default BeerDetails