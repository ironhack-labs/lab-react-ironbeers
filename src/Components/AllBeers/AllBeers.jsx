import { Row, Col, Card, Button, ç } from "react-bootstrap"
import { Link } from "react-router-dom"


const AllBeers = ({ beers }) => {

    return (
        <Row>
            {
                beers.map(beer => {
                    return (

                        <Card className="BeerCard" style={{ width: '300px' }}>
                            <Card.Img variant="top" src={`${beer.image_url}`} />
                            <Card.Body>
                                <Card.Title>{beer.name}</Card.Title>
                                <Card.Text>
                                    {beer.tagline}
                                </Card.Text>
                                <Card.Text>
                                    {beer.name}
                                </Card.Text>
                                <Link to={`/beers/${beer._id}`}>
                                    <div>
                                        <Button variant="primary">Go somewhere</Button>
                                    </div>
                                </Link>
                            </Card.Body>
                        </Card>

                    )
                })
            }
        </Row >
    )
}

export default AllBeers