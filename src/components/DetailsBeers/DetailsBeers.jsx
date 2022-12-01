import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"


const BeerCardDetails = ({ image_url, name, _id, tagline, contributed_by,first_brewed,attenuation_level,description }) => {


    return (
        
        <Card  className=" BeerCard  mb-4" style={{width: `300px`}}>
            <Card.Body>
                <Card.Img  className="ImageBeer" variant="top" src={image_url} />
                <Card.Title>{name}</Card.Title>
                <h6 className="tagline">{tagline}</h6>
                <p><strong>Description: </strong>{description}</p>
                <p><strong>Contributed by: </strong>{contributed_by}</p>
                <p><strong>Brewed: </strong>{first_brewed}</p>
                <p><strong>Atenuation Level: </strong>{attenuation_level}</p>
        

                
                <Link to={`/beers/${_id}`}>
            <div className="d-grid">
            <Button variant="dark" size="sm">More Info</Button>
             </div>
              </Link>
                
           

            </Card.Body>
        </Card>
       
    )
}
export default BeerCardDetails


