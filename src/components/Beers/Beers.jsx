import Navbar from '../NavBar/Navbar'
import BeersService from '../../services/beers.services'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Beers() {

    const [beers, setBeers] = useState([])

    useEffect(() => {

        BeersService
            .getBeers()
            .then(({ data }) => {
                setBeers(data)
            })
            .catch(err => console.log(err))
    }, [])

    const showDetails = (beer_id) => {

        BeersService
            .getOneBeer(beer_id)
            .catch(err => console.log(err))
    }


    return (
        <div>

            <Navbar />

            <h1>Beers</h1>
            {
                beers.map(elm => {
                    const link = `/beers/${elm._id}`
                    return (
                        <div key={elm._id} >
                            <div>
                                <Link to={link}>
                                    <img src={elm.image_url} alt={elm.name} />
                                </Link>
                            </div>
                            <div>
                                <p>{elm.name}</p>
                                <p>{elm.tagline}</p>
                                <p>{elm.contributed_by}</p>
                            </div>
                        </div>
                    )
                })
            }

        </div >
    )
}

export default Beers