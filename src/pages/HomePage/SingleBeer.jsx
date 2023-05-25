import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import BeerService from '../../services/Beers.services';
import './pages.css';
import NavBar from "../../components/NavBar";
import { Row, Col, Container, Button } from "react-bootstrap"



const SingleBeer = () => {


    const { beerId } = useParams()

    const [beer, setBeer] = useState()

    useEffect(() => {
        loadBeer()
    }, [])

    const loadBeer = () => {
        BeerService
            .getOneBeer(beerId)
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))
    }

    return (
        <>
            <NavBar></NavBar>
            <Container className="beer">
                {
                    !beer
                        ?
                        <p>Cargando</p>
                        :
                        <>
                            <h1>Detalles de {beer.name}</h1>
                            <hr />

                            <Row>
                                <img className="beer" src={beer.image_url} style={{ width: '100%' }} />


                            </Row>
                            <p>{beer.name}</p>
                            <p>{beer.tagline}</p>
                            <p>{beer.first_brewed}</p>
                            <p>{beer.attenuation_level}</p>
                            <p>{beer.description}</p>
                            <p>{beer.contributed_by}</p>

                            <Link to="/beers">
                                <Button variant="dark">Volver a la galería</Button>
                            </Link>
                        </>

                }

            </Container>

        </>
    )
}

export default SingleBeer