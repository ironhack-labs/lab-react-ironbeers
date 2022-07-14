import { Link } from "react-router-dom";
import beersService from "../../services/beers.service";
import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"

function RandomBeer() {

    const [beers, setBeers] = useState([])



    useEffect(() => {
        loadBeersDetails()
    }, [])

    const loadBeersDetails = () => {
        beersService
            .getRandomBeer()
            .then(({ data }) => setBeers(data))
            .catch(err => console.error(err))
    }

    return (

        <Container>
            <header>
                <Link to="/"><img src="https://static.vecteezy.com/system/resources/previews/001/200/283/non_2x/city-building-house-png.png" alt="beer" /></Link>

            </header>


            <Row>
                <Col md={{ span: 12 }}>
                    <img src={beers.image_url} />

                    <p>{beers.name}</p>
                    <p>{beers.tagline}</p>
                    <p>{beers.tagline}</p>
                    <p>{beers.first_brewed}</p>
                    <p>{beers.attenuation_level}</p>
                    <p>{beers.description}</p>


                </Col>
            </Row>


        </Container>
    );
}


export default RandomBeer; 