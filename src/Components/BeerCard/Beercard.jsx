import Card from 'react-bootstrap/Card'

function BeersCard({ name, image_url, _id }) {
    return (
        <Card className="mb-4 CoasterCard">
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>

            </Card.Body>
        </Card>
    )
}