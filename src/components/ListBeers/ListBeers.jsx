
import './ListBeers.css'
import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"


const BeerCard = ({ image_url, name, _id, tagline, contributed_by }) => {


    return (
        
        <Card  className=" BeerCard  mb-4" style={{width: `300px`}}>
            <Card.Body>
                <Card.Img  className="ImageBeer" variant="top" src={image_url} />
                <Card.Title>{name}</Card.Title>
                <h6 className="tagline">{tagline}</h6>
                <span><strong>Contributed by: </strong>{contributed_by}</span>
                <Link to={`/beers/${_id}`}>
            <div className="d-grid">
            <Button variant="dark" size="sm">More Info</Button>
             </div>
              </Link>
                
           

            </Card.Body>
        </Card>
       
    )
}
export default BeerCard


