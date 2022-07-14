import { Link } from "react-router-dom";
import beersService from "../../services/beers.service";
import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"

function ListBeers() {

    const [beers, setBeers] = useState([])


    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beersService
            .getBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.error(err))
    }


    return (
        <Container>
            <header>
                <Link to="/"><img src="https://static.vecteezy.com/system/resources/previews/001/200/283/non_2x/city-building-house-png.png" alt="beer" /></Link>

            </header>
            {
                beers.map(({ name, image_url, tagline, _id }) => {
                    return (
                        <Row>
                            <Col md={{ span: 12 }}>
                                <img className="beersImage" src={image_url} />

                                <p>{name}</p>
                                <p>{tagline}</p>
                                <Link to={`/${_id}`}>Ver detalles</Link>
                            </Col>
                        </Row>
                    )
                })
            }
        </Container>
    );
}


export default ListBeers; 