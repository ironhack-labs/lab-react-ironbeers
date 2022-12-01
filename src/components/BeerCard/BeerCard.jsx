import { Col, Row } from "react-bootstrap"
import Card from 'react-bootstrap/Card'


const BeerCard = ({ image_url, name, tagline, contributed_by, _id }) => {

    return (
        <Row>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {tagline}
                    </Card.Text>
                    <Card.Text>
                        {contributed_by}
                    </Card.Text>
                </Card.Body>
            </Card>

        </Row>
    )
}

export default BeerCard