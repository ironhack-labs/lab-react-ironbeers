import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {

    return (
        <>
            <section>
                <Container>
                    <h1 className="title">🍺 Ironbeers 🍺</h1>
                    <hr />
                    <Link to="/beers">All Beers</Link>
                    <hr />
                    <Link to="/random-beer">Random Beer</Link>
                    <hr />
                    <Link to="/new">New Beer</Link>
                </Container>
            </section>
        </>
    )
}

export default Home