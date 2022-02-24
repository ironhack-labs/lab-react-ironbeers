import { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import NavBar from '../../components/NavBar/NavBar'
import beersService from '../../services/beers.service'
import { Link } from 'react-router-dom'

const BeerListPage = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beersService
            .getAllBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }

    return (
        <>
            <NavBar />
            <h1>Página de cervezas</h1>
            <div className='row'>
                {
                    beers.map(beer => {
                        return (
                            <div className='col-4' key={beer._id}>
                                <Link to={`/${beer._id}`}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={beer.image_url} />
                                        <Card.Body>
                                            <Card.Title>{beer.name}</Card.Title>
                                            <Card.Text>
                                                <p>Tagline: {beer.tagline}</p>
                                                <p>Contributed by: {beer.contributed_by}</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default BeerListPage