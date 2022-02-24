import { Card, Button, Image } from "react-bootstrap"
import { Link } from "react-router-dom"

const BeerCard = (props) => {

    const { _id, image_url, name, tagline, contributed_by } = props








    return (

        <Card style={{ width: '20rem' }}>
            <Image fluid src={image_url} style={{ height: "250px", objectFit: "contain", objectPosition: "bottom" }} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Contributed by : {contributed_by}</Card.Subtitle>
                <Card.Text>
                    {tagline}
                </Card.Text>
                <Link to={`/beers/${_id}`}> <Button variant="info">Details</Button></Link>
            </Card.Body>
        </Card>

    )
}

export default BeerCard