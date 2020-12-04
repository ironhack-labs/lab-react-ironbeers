import { Row, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './FirstPage.css'


const FirstPage = ({ title, image, description, path }) => {
    return (
        <Link to={path}>
            <Row>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title><h1>{title}</h1></Card.Title>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Link>
    )
}

export default FirstPage