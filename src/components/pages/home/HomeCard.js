import { Link } from 'react-router-dom'
import { Col, Card } from 'react-bootstrap'

//Faltan Props
const HomeCard = () => {
    return (
        
        <Col lg={8}>
            <Card className="coaster-card">
                <Card.Img variant="top" src={' TO-DO '} />
                <Card.Body>
                    <Card.Title>Titulo TO-DO</Card.Title>
                    <Link className="btn btn-dark btn-block btn-sm" to={' TO-DO '}>Detalles</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default HomeCard
