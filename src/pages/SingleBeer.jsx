import React, {useState, useEffect, useContext} from 'react'
import { Link, useParams} from 'react-router-dom' 
import axios from 'axios';
import { ApiContext } from '../contexts/api.context'
import Header from '../components/Header';

function SingleBeer() {
    const [beer, setBeer] = useState(null)
    const [loading, setLoading] = useState(true)
    const {beerId} = useParams();
    const {apiUrl} = useContext(ApiContext)


    const getBeer = async () => {
        try {
            let response = await axios.get(`${apiUrl}/${beerId}`)
            setBeer(response.data);
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBeer();
      }, []);

  return (
    <>
        <Header />
        {loading && <p>Loading ...</p>}
        {beer && (
            <div key={beer._id}>
                <img src={beer.image_url} alt={`${beer.name}`}/>
                <Link to={`/beers/${beer._id}`}>
                    <h2>{beer.name}</h2>
                </Link>
                <h3>{beer.tagline}</h3>
                <h3>{beer.attenuation_level}</h3>
                <p><span style={{fontWeight: 500}}>{beer.first_brewed}</span></p>
                <p>{beer.description}</p>
                <p><span style={{fontWeight: 500}}>Created by: </span>{beer.contributed_by}</p>
            </div>
        )}
    </>
  )
}

export default SingleBeer