import { Card, Col } from "react-bootstrap";
import './BeerCard.css'

function BeerCard({ image_url, name, tagline, description, first_brewed, contributed_by }) {

    return (
        <Card >
            <Card.Img src={image_url} />

            <Card.Body>
                <Card.Text>
                    <h2>{name}</h2>
                    <hr />

                    <h3>{tagline}</h3>
                    <h4>{first_brewed}</h4>

                    <p>{description}</p>
                    <p>{contributed_by}</p>
                </Card.Text>
            </Card.Body>

        </Card>
    );
}

export default BeerCard;