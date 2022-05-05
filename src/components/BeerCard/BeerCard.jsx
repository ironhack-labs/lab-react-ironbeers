import { Card } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

const BeerCard = ({ name, image_url, _id }) => {
    return (
        <Card className="BeerCard">
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Text>{name}</Card.Text>
                {/* <Card.Text>{tagline}</Card.Text> */}
                <Card.Text>Created By:{name}</Card.Text>
                {/* <Link to={`/beers/${_id}`}>
                    <div className="d-grid gap-2">
                        <Button variant="dark">Ver detalles</Button>
                    </div>
                </Link> */}
            </Card.Body>
        </Card >
    )
}

export default BeerCard