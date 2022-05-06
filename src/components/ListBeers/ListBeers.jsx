import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../ListBeers/ListBeers.css'
import NavBarFixed from '../NavBar/NavBar'

const ListBeers = ({ beersArr }) => {

    const [beers, setBeers] = useState([beersArr])


    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        setBeers(beersArr)
    }


    return (
        <>

            <NavBarFixed></NavBarFixed>
            {beers?.map((beer) => {

                return (
                    <div className='listBeers'>
                        <p>{beer.name}</p>
                        <img src={beer.image_url} alt="" />
                        <p>{beer.tagline}</p>
                        <p>{beer.first_brewed}</p>
                        <p>{beer.attenuation_level}</p>
                        <p>{beer.description}</p>
                        <p>Contribuido por: {beer.contributed_by}</p>
                        <Link to={`/single-beer/${beer._id}`}>Ver detalles</Link>
                    </div>


                )
            })
            }
        </>
    )
}
export default ListBeers