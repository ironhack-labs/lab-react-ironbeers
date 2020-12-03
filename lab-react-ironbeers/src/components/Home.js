import { Col, Card } from "react-bootstrap"
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <h1 className="title" >Welcome to IronBeers</h1>
    <Col md={6}>
      <Card className="home">
        <Card.Img variant="top" src={'https://dam.ngenespanol.com/wp-content/uploads/2019/08/tipos-de-cerveza-2.jpg'} />
        <Card.Body>
          <Card.Title>All Beers</Card.Title>
          <Link className="btn btn-dark btn-block btn-sm" to={`/Beers`}>
            Ver detalles
          </Link>
        </Card.Body>
      </Card>
      
      
<Card className="home">
        <Card.Img variant="top" src={'https://madridplanes.es/wp-content/uploads/2019/05/cervezas-la-virgen.jpg'} />
        <Card.Body>
          <Card.Title>All Beers</Card.Title>
          <Link className="btn btn-dark btn-block btn-sm" to={`/Random-beer`}>
            Ver detalles
          </Link>
        </Card.Body>
      </Card>
        <Card className="home">
        <Card.Img variant="top" src={'https://www.ngenespanol.com/wp-content/uploads/2018/08/7-buenas-razones-para-tomar-cerveza.png'} />
        <Card.Body>
          <Card.Title>All Beers</Card.Title>
          <Link className="btn btn-dark btn-block btn-sm" to={`/New-beer`}>
            Ver detalles
          </Link>
        </Card.Body>
      </Card>
        </Col>
    </>
  );
};

export default Home;
