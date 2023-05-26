import { Card } from "react-bootstrap"
import "./CardBeerDetails.css"


const CardBeerDetails = ({ beer }) => {
    return (
        <Card className="ImgDetails" >


            <img src={beer.image_url} alt="" />
            <Card.Body className="p-4">
                <Card.Title>{beer.title}</Card.Title>
                <Card.Text>
                    <p>{beer.tagline}</p>
                    <p>{beer.first_brewed}</p>
                    <p> {beer.attenuation_level}</p>
                    <p>{beer.description}</p>
                    <p>{beer.contributed_by}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardBeerDetails