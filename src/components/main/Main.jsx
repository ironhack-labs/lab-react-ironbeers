import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import beerPhoto from './../../assets/beers.png'
import randomPhoto from './../../assets/random-beer.png'
import newPhoto from './../../assets/new-beer.png'
import AppRoutes from '../../routes/AppRoutes'
import './main.css'

const Main = () => {

    return (<Container>
        <br></br>

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={beerPhoto} />
            <Card.Body>
                <Link to={`/beers`} className="links"><Card.Title> All Beers </Card.Title></Link>
                <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Card.Text>
            </Card.Body>
        </Card>
        <br></br>

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={randomPhoto} />
            <Card.Body>
                <Link to={`/random-beer`} className="links"><Card.Title> Random Beer </Card.Title></Link>
                <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Card.Text>
            </Card.Body>
        </Card>
        <br></br>

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={newPhoto} />
            <Card.Body>
                <Link to={`/new-beer`} className="links"><Card.Title> New Beer </Card.Title></Link>
                <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Card.Text>
            </Card.Body>
        </Card>

    </Container>)
}

export default Main