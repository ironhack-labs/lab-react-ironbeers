import { Card, Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const BeerCard = ({ Updatebeers, descp }) => {

    console.log("-----------------", Updatebeers)

    return (

        <Container>

            <Row>
                {
                    Updatebeers.map(({ name, image_url, tagline, _id, contributed_by, description }) => {

                        return (
                            <Col key={_id}>
                                <Link to={`/beer/${_id}`}>
                                    <Card className="card" style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={image_url} />
                                        <Card.Body>
                                            <Card.Title>{name}</Card.Title>
                                            <h5>{tagline}</h5>
                                            {descp ? <p>{description}</p> : ""}
                                            <h3><strong>Created by: </strong>{contributed_by}</h3>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>

                        )

                    })
                }
            </Row>
        </Container >

    )
}


export default BeerCard



