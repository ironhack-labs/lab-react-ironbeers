import { Card, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"

import './BeersList.css'

const BeersList = ({ beers }) => {

    return (
        <>
            {
                beers.map((elm) => {
                    return (
                        <Card key={elm._id} style={{ width: '18rem' }} className="beersList">
                            <Card.Img variant="top" src={elm.image_url} />
                            <Card.Body>
                                <Card.Title>{elm.name}</Card.Title>
                                <Card.Text>
                                    {elm.tagline}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item><strong>Created by: </strong>{elm.contributed_by}</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link>
                                    <Link to={`/details/${elm._id}`}>Details</Link>
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </>
    )
}

export default BeersList