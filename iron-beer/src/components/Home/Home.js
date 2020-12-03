import { Link } from 'react-router-dom'
import { Container, Card, Col } from 'react-bootstrap'

const Home = () => {
    return (
        <>
            <h1>Ironbeers</h1>
            <Col md={4}>
                <Card>
                    <Card.Img src='https://ep01.epimg.net/elcomidista/imagenes/2019/08/05/articulo/1565004007_899164_1565004349_media_normal.jpg' alt='bars' />
                    <Card.Body>
                        <Card.Title><Link to={'/beers'}><h3>All Beers</h3></Link></Card.Title>
                        <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</p>
                    </Card.Body>
                </Card>



                <Card>
                    <Card.Img src='https://dam.ngenespanol.com/wp-content/uploads/2019/08/tipos-de-cerveza-2.jpg' alt='random beer' />
                    <Card.Body>
                        <Card.Title><Link to={'/random-beer'}><h3>Random Beer</h3></Link></Card.Title>
                        <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</p>
                    </Card.Body>
                </Card>



                <Card>
                    <Card.Img src='https://www.merca2.es/wp-content/uploads/2020/08/cervezas-alcampo-1200x800.jpg' alt='new beer' />
                    <Card.Body>
                        <Card.Title><Link to={'/new-beer'}><h3>New Beer</h3></Link></Card.Title>
                        <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</p>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default Home