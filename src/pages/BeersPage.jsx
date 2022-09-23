import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import BeersAxios from '../services/beerAxios';

const BeersPage = () => {
    const beerAxios = new BeersAxios();
    const [beers, setBeers] = useState([])

    useEffect(() => {
        beerAxios
            .getAllBeers()
            .then((beers) => {
                setBeers(beers)
            })
            .catch(e => console.log(e))
    }, []);

    return (
        <>
            <h1>hola</h1>
            <Container>
                <Row>
                    {beers.map(beer =>
                        <Card key={beer._id} style={{ width: '18rem' }}>
                            <Card.Img className='img' variant="top" src={beer.image_url} />
                            <Card.Body>
                                <Card.Title >{beer.name}</Card.Title>
                                <Card.Text>
                                    {beer.tagline}
                                </Card.Text>
                                <Card.Text>
                                    {beer.contributed_by}
                                </Card.Text>
                                <Nav className="me-auto">
                                    <Nav.Link>
                                        <Link className='link-react' to={`/beers/${beer._id}`}>More Details</Link>
                                    </Nav.Link>
                                </Nav>
                            </Card.Body>
                        </Card>
                    )
                    }
                </Row>
            </Container>


        </>
    )

}

export default BeersPage;

