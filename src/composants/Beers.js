import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom'

const Beers = () => {

    const [beers, setBeers] = useState([])

    const fetchData = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => setBeers(response.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div>

            {beers.map((beer, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'row', border: '1px red solid', height: 200, width: 400, margin:'auto' }}>

                    <Link to={`/beers/${beer._id}`}> <img src={beer.image_url} alt={beer.name} style={{ width: 50 }} /></Link>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Link to={`/beers/${beer._id}`} style={{  textDecoration:'none' }}>
                            <h2>{beer.name}</h2>
                            <p>{beer.tagline}</p>
                            <p>Created by: {beer.name}</p>
                        </Link>
                    </div>


                </div>
            ))}

        </div>
    );
}

export default Beers;