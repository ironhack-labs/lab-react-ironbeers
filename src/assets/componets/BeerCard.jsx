import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const Beercard=({image_url,name,tagline,contributed_by,_id})=>{
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          tagline:{tagline}
          </Card.Text>
          <Card.Text>
          contributed_by:{contributed_by}
          </Card.Text>
          <Link to={`/details/${_id}`}>ver Detalles</Link>
        </Card.Body>
      </Card>
    )
}
export default Beercard