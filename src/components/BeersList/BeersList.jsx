import { Col, Row, Card, Button } from 'react-bootstrap'

function BeersList ({ beers }) {
    return (
       <Row>
            {
                beers.map(beer => {
                    return (
                        <Card style={{ width: '18rem' }} className='beerList'>
                            <Card.Img variant="top" src={beer.image_url} />
                            <Card.Body>
                                <Card.Title>{beer.name}</Card.Title>
                                <Card.Text>{beer.tagline}</Card.Text>
                                <Card.Text>Created by: {beer.contributed_by}</Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </Row>

        
    )
}

export default BeersList