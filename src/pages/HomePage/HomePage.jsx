import { Card, Col, Container, Row } from "react-bootstrap"
import hero1 from '../../assets/beers.png'
import hero2 from '../../assets/new-beer.png'
import hero3 from '../../assets/random-beer.png'
import { Link } from "react-router-dom"

const HomePage = () => {

    return (
        <Container>
            <Row>
                <Col md={{ span: 8, offset: 2 }}>

                    <Link to='/beers' >
                        <Card className='my-4'>
                            <Card.Img variant="top" src={hero1} />
                            <Card.Body>
                                <Card.Title>All Beers</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem in esse quos repudiandae ipsum neque suscipit aliquid ab impedit beatae voluptas dolores reiciendis, iure qui tenetur quo natus. Vero, adipisci!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>

                    <Link to='/random-beer' >
                        <Card className='my-4'>
                            <Card.Img variant="top" src={hero2} />
                            <Card.Body>
                                <Card.Title>Random Beer</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem in esse quos repudiandae ipsum neque suscipit aliquid ab impedit beatae voluptas dolores reiciendis, iure qui tenetur quo natus. Vero, adipisci!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>

                    <Link to='/new-beer' >
                        <Card className='my-4'>
                            <Card.Img variant="top" src={hero3} />
                            <Card.Body>
                                <Card.Title>New Beer</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem in esse quos repudiandae ipsum neque suscipit aliquid ab impedit beatae voluptas dolores reiciendis, iure qui tenetur quo natus. Vero, adipisci!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col >
            </Row >


        </Container >
    )
}
export default HomePage
