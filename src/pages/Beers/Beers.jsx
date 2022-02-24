import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'

const Beers = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                console.log(response.data)
                setBeers(response.data)
            })
    }, [])

    return (
        <section className=''>
            <Header />
            <ul>
                {
                    beers.map(elm => {
                        return <li>
                            <Link to={`/beers/${elm._id}`}>
                                <img src={elm.image_url} />
                                <h3>{elm.name}</h3>
                                <p>{elm.tagline}</p>
                                <p><strong>Created by:</strong>{elm.name}</p>
                                <hr />
                            </Link>
                        </li>
                    })
                }
            </ul>
        </section>
    )
}

export default Beers