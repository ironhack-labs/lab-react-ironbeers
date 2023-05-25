import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import BeerService from '../../services/Beers.services';
import './pages.css';
import { Row, Col, Container, Button } from "react-bootstrap"
import NavBar from "../../components/NavBar";



const RandomBeersPage = () => {


    const [beer, setBeer] = useState()

    useEffect(() => {
        loadBeer()
    }, [])

    const loadBeer = () => {
        BeerService
            .getRandomBeer()
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


                        </>

                }

            </Container>

        </>
    )
}

export default RandomBeersPage