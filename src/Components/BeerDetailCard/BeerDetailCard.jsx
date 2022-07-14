import { Card, Row, Col } from 'react-bootstrap'

const BeerDetailCard = ({ beer }) => {
    console.log(beer)
    return (
        <>

            <Card className="BeerDetailCard sm-12 mb-4">
                <Card.Img variant="top" src={beer.image_url} />
                <Card.Body>
                    <Card.Title className='cardTitle'>
                        <Row>
                            <Col><Card.Text>{beer.name}</Card.Text></Col>
                            <Col><Card.Text className='lightGrayText'>{beer.attenuation_level}</Card.Text></Col>
                        </Row>
                    </Card.Title>
                    <hr />
                    <Card.Subtitle className='cardSubtitle'>
                        <Row>
                            <Col className='grayText'><Card.Text>{beer.tagline}</Card.Text></Col>
                            <Col><Card.Text>{beer.first_brewed}</Card.Text></Col>
                        </Row>
                    </Card.Subtitle>
                    <hr />
                    <Card.Text>{beer.description}</Card.Text>
                </Card.Body>
                <hr />
                <Card.Body>
                    <Card.Text className='cardFooter'>{beer.contributed_by}</Card.Text>
                </Card.Body>
            </Card>
        </>

    )
}

export default BeerDetailCard