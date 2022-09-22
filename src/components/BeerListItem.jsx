import { Container, ListGroup, Row } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"

const BeerListItem = ({ beer }) => {
    const navigate = useNavigate()

    return (
        <>
            <ListGroup.Item style={{ cursor: 'pointer' }} onClick={() => navigate(`/beers/${beer?._id}`)}>
                <Container>
                    <Row>
                        <img src={beer.image_url} className={'col-3'} />
                        <div className="col">
                            <h3>{beer.name}</h3>
                            <h5>{beer.tagline}</h5>
                            <p>Created by: {beer.contributed_by}</p>
                        </div>
                    </Row>
                </Container>
            </ListGroup.Item>
        </>
    )
}

export default BeerListItem