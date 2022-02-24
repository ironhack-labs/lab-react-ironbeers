import Header from "../../components/Header/Header"
import { useState, useEffect } from 'react'
import beerServices from '../../services/beerServices'
import { Container, Card } from 'react-bootstrap'
import { Link } from "react-router-dom"


const BeerListPage = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beerServices
            .getAllBeers()
            .then(response => setBeers(response.data))
            .catch(err => console.log(err))
    }
    console.log(beers)
    return (

        
        beers.map((beer) => {
            return (
                <>
                    <Header/>

                    <Container>

                        
                        <Card className="beerCard">
                            <Card.Img variant="top" src={beer.image_url} style={{ width: 150 }} />
                            <Card.Body>
                                <Link to="/:id"><Card.Title>{beer.name}</Card.Title></Link>
                                <Card.Text>{beer.tagline}</Card.Text>
                                <Card.Text>{beer.contributed_by}</Card.Text>
                            </Card.Body>
                        </Card >

                    </Container>

                </>)
        })
    )
}
export default BeerListPage
