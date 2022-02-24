import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const BeerCard = ({beer}) => {


    return(
        <Card key={beer._id} style={{ width: '18rem' }}>
                        <Card.Img className="cardImg" variant="top" src={`${beer.image_url}`} />
                        <Card.Body>
                            <Card.Title>{beer.name}</Card.Title>
                            <Card.Text> {beer.tagline} </Card.Text>
                            <Card.Text> {beer.first_brewed} </Card.Text>
                            <Card.Text> {beer.attenuation_level} </Card.Text>
                            <Card.Text> {beer.description} </Card.Text>
                            <Card.Text> Created by: {beer.contributed_by} </Card.Text>
                           
                            <Link to={`/beers`} className="button" variant="primary">Back to all beers!</Link>
                      
                        </Card.Body>
                    </Card>
    )
}

export default BeerCard