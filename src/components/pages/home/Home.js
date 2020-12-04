import { Link } from 'react-router-dom'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Home = () => {
    return (
    <Container>
        <Row>
            <Col lg={8}>
                    
                <Card className="beer-card">
                    <Card.Img variant="top" src='https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2017/08/baladin1.jpg' />
                    <Card.Body>
                          <Card.Title>All Beers</Card.Title>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                            <Link className="btn btn-dark btn-block btn-sm" to={'/beers'}>All Beers</Link>  
                        
                     </Card.Body>
                </Card>
                    
            </Col>
                

            <Col lg={8}>
                    
                <Card className="beer-card">
                    <Card.Img variant="top" src='https://cdn.vox-cdn.com/thumbor/JfaZhCcL0T_B0-ZCYUdIyfs1t_g=/0x0:1000x634/1200x900/filters:focal(420x237:580x397)/cdn.vox-cdn.com/uploads/chorus_image/image/60123291/image_asset.12.png' />
                    <Card.Body>
                          <Card.Title>Random Beer</Card.Title>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                            <Link className="btn btn-dark btn-block btn-sm" to={'/random-beer'}>Random Beer</Link>  
                        
                     </Card.Body>
                 </Card>
                    
            </Col>
                

            <Col lg={8}>

                <Card className="beer-card">
                    <Card.Img variant="top" src='https://thelivenagpur.com/wp-content/uploads/2020/05/great-bar-header.jpg' />
                    <Card.Body>
                          <Card.Title>New Beer</Card.Title>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                            <Link className="btn btn-dark btn-block btn-sm" to={'/new-beer'}>New Beer</Link>  
                     </Card.Body>
                </Card>

            </Col>
                
        </Row>
    </Container>





)}

export default Home
