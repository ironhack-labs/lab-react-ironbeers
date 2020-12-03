import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import './Home.css'
import Header from '../../header/Header'


const Home = () => {
    return (
        <section>
            <Header/>
            <Container>
                <Row>
                    <Col sm={12}>
                        <Link to='/beers'>
                            <figure>
                                <img src="https://thumbor.thedailymeal.com/lFuwgg6ktfw0H1Qwk1XTbSSarIE=//https://www.thedailymeal.com/sites/default/files/slideshows/1871062/2218930/iStock-854848732_0.jpg" alt="all beers" />
                            </figure>
                            <h2>All Beers</h2>
                            <p>Minions ipsum belloo! Tulaliloo bee do bee do bee do para tú chasy hana dul sae poulet tikka masala chasy la bodaaa. </p>
                            
                        </Link>
                        </Col>
                    </Row>
            </Container>
               <Container>
                <Row>
                    <Col sm={12}>
                        <Link to='/new-beer'>
                            <figure>
                                <img src="https://p2d7x8x2.stackpathcdn.com/wordpress/wp-content/uploads/2020/03/iStock-1040303026.jpg" alt="new beers" />
                            </figure>
                            <h2>New Beer</h2>
                            <p>Minions ipsum belloo! Tulaliloo bee do bee do bee do para tú chasy hana dul sae poulet tikka masala chasy la bodaaa. </p>
                            
                        </Link>
                        </Col>
                    </Row>
            </Container>
               <Container>
                <Row>
                    <Col sm={12}>
                        <Link to='/random-beer'>
                            <figure>
                                <img src="https://stmedia.stimg.co/ctyp-092320-Beer-Issue-Getty.jpg?w=1200&h=630" alt="all beers" />
                            </figure>
                            <h2>Ramdon Beer</h2>
                            <p>Minions ipsum belloo! Tulaliloo bee do bee do bee do para tú chasy hana dul sae poulet tikka masala chasy la bodaaa. </p>
                            
                        </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
    )
}

export default Home