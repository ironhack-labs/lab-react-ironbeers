import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Beers = (props) => {
    const [beers, SetBeer] = useState([])

    useEffect(() => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                SetBeer(response.data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <Link to="/">Home</Link>
            <ul>
                {beers.map((beer) => {
                    return (
                        <div key={beer._id}>
                            <li>
                                <img style={{ width: "100px" }} src={beer.image_url} alt={beer.name} />
                                <h2>{beer.name}</h2>
                                <h3>{beer.tagline}</h3>
                                <h4>Created by: </h4>{beer.name}
                            </li>
                            <Link to={beer._id}>Details</Link>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}


export default Beers