import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import './BeerCard.css'



const BeerCard = ({ image_url, name, tagline, contributed_by, _id }) => {

    return (
        <>


            <Card className='mb-3 BeerCard'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>

                    <Link to={`/${_id}`}>
                        <Card.Text> <h2>{name}</h2> </Card.Text>
                    </Link>
                    <Card.Text>{tagline}</Card.Text>
                    <Card.Text>{contributed_by}</Card.Text>
                </Card.Body>
            </Card>
        </>

    )
}



export default BeerCard

// first_brewed, attenuation_level, description,