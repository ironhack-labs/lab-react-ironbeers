import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"


const BeerCard = ({_id, name, tagline, image_url}) => {

    
    return (
       
            <Card className="cardImg text-center">
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{tagline}</Card.Text>
                    <Link className="link-decoration" to={`/${_id}`} >
                        <div className="d-grid">
                            <Button variant="dark">Detalles</Button>
                        </div>
                    </Link>
                </Card.Body>
            </Card>

    )
}

export default BeerCard