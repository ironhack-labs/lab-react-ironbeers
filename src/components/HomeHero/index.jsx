import Card from 'react-bootstrap/Card';


const HomeHero = ({ name, description, imgUrl }) => {

    return (
        <Card style={{}}>
            <Card.Img variant="top" src={imgUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default HomeHero