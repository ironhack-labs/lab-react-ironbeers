import './../../components/App.css'
import { Container } from 'react-bootstrap';
import Navbar from '../../components/NavBar/NavBar';

const RandomBeerPage = ({ renderBeers }) => {

    const randomBeer = renderBeers[Math.floor(Math.random() * renderBeers.length)]

    return (
        <>
            <Navbar />
            <Container>
                <img src={randomBeer.image_url} className="mb-3" style={{ width: '120px', margin: 'auto', height: '40vh', textAlign: 'center', display: 'block' }} alt="" />
                <h2>{randomBeer.name}</h2>
                <h3>{randomBeer.tagline}</h3>
                <p>{randomBeer.first_brewed}</p>
                <p>{randomBeer.attenuation_level}</p>
                <p>{randomBeer.description}</p>
            </Container>
        </>
    )
}

export default RandomBeerPage