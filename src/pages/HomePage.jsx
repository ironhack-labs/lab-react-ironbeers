import { useEffect, useState } from 'react';
import BeersAxios from '../services/BeersAxios';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import OneBeer from '../components/OneBeer/OneBeer';



const Beers = () => {
    const beerAxios = new BeersAxios()
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        beerAxios
            .getAllBeers()
            .then((beers) => {
                console.log(beers)
                setBeers(beers);
            });
    }, []);


    return (
        <ListGroup>
            {
                beers.map(beer => {
                    return (
                        <ListGroup.Item key={beer._id}>
                            <Container>
                                <Row>
                                    <OneBeer beer={beer} />
                                </Row>
                            </Container>
                        </ListGroup.Item>
                    )
                })
            }

        </ListGroup>
    )
}

export default Beers