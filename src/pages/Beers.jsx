import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { ApiContext } from '../contexts/api.context'

import Header from '../components/Header'



function Beers() {
    const [beers, setBeers] = useState([])
    const [loading, setLoading] = useState(true);
    const {apiUrl} = useContext(ApiContext)

    const getBeers = async () => {
        try {
            let response = await axios.get(apiUrl)
            setBeers(response.data);
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBeers();
      }, []);

  return (
    <div>
        <Header />
        {loading && <p>Loading ...</p>}
        {beers && (
            beers.map((beer) => {
                return (
                    <div key={beer._id}>
                        <img src={beer.image_url} alt={`${beer.name}`}/>
                        <Link to={`/beers/${beer._id}`}>
                            <h2>{beer.name}</h2>
                        </Link>
                        <h3>{beer.tagline}</h3>
                        <p><span style={{fontWeight: 500}}>Created by: </span>{beer.contributed_by}</p>
                    </div>
                )
            })

        )}
    </div>
  )
}

export default Beers
