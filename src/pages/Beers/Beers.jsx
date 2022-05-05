import { useState, useEffect } from 'react'
import axios from 'axios'
import './Beers.css'
import { Link } from 'react-router-dom'

const Beers = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                setBeers(response.data)
            })
    }, [])

    return (
        <section className='beersList'>
            <ul>
                {
                    beers.map(elm => {
                        return <li key={elm._id}>

                            <img src={elm.image_url} />
                            <div>
                                <Link to={`/beers/${elm._id}`} className="eachBeer"><h3>{elm.name}</h3></Link>
                                <p>{elm.tagline}</p>
                                <p><strong>Created by:</strong>{elm.name}</p>
                            </div>

                        </li>
                    })
                }
            </ul>
        </section>
    )
}

export default Beers