import { Card, Row, Col } from 'react-bootstrap'

const BeerCard = ({ beer }) => {
    console.log(beer)
    return (
        <>

            <Card className="BeerCard sm-12 mb-4">
                <Card.Img variant="top" src={beer.image_url} />
                <Card.Body>
                    <Card.Title className='cardTitle'>
                        <Row>
                            <Col><Card.Text>{beer.name}</Card.Text></Col>
                            <Col><Card.Text className='lightGrayText'>{beer.attenuation_level}</Card.Text></Col>
                        </Row>
                    </Card.Title>

                </Card.Body>
            </Card>
        </>

    )
}

export default BeerCard