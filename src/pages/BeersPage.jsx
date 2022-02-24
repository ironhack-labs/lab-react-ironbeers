import { useEffect, useState } from 'react'
import ironbeersService from '../services/ironbeers.service'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BeersPage = () => {
    const [disData, setDisData] = useState([])

    useEffect(() => {
        loadAllBeers()
    }, [])

    const loadAllBeers = () => {
        ironbeersService
            .getAllBeers()
            .then(({ data }) => setDisData(data))
            .catch(err => console.log(err))
    }

    return (
        <>
            <Container>
                {
                    disData.map(eachBeer => {
                        return (
                            <Link to={`/beers/${eachBeer._id}`}>
                                <div className='allBeersCard' key={eachBeer._id}>
                                    <img src={eachBeer.image_url} alt={eachBeer.name} />
                                    <div className='allBeersCardSideText'>
                                        <h3>{eachBeer.name}</h3>
                                        <p>{eachBeer.tagline}</p>
                                        <p>{eachBeer.contributed_by}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </Container>
        </>
    )
}

export default BeersPage