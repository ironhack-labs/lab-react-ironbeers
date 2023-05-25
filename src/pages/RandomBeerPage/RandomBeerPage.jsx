import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import beerServices from "./../../services/BeerServices"
import { Row, Col, Container, Button } from "react-bootstrap"
import Navigation from "../../components/Navbar/Navbar"

function RandomBeerPage() {

    const [beer, setBeer] = useState()

    useEffect(() => {
        loadBeer()
    }, [])

    const loadBeer = () => {
        beerServices
            .getOneRandom()
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))
    } 
    
    
    return (
        <>
        <Navigation />
        
        <Container>
            {
                !beer
                    ?
                    <p>Cargando...</p>
                    :
                    <>

                        <Row className="mt-4">

                            <Col md={{ span: 6, offset: 3 }}>
                                <img src={beer.image_url} style={{ width: '100px' }} />
                               
                                <h1>{beer.name}</h1>
                                
                                <h4>{beer.tagline}</h4>
                                <p>{beer.description}</p>
                                <h4>{beer.first_brewed}</h4>
                                <h4>{beer.contributed_by}</h4>
                                

                            </Col>

                            <Link to="/" className="mt-4">
                                <Button variant="dark">Home</Button>
                            </Link>

                            <Link to="/all-beers" className="mt-4">
                                <Button variant="dark">All Beers</Button>
                            </Link>
                        
                        </Row>
                    </>
            }

        </Container>

        </>
    )

}

export default RandomBeerPage