import { useParams } from 'react-router-dom'
import './../../components/App.css'
import { Container } from 'react-bootstrap';
import Navbar from '../../components/NavBar/NavBar';

const SingleBeerPage = ({ renderBeers }) => {

    const { id } = useParams()
    const selectedBeer = renderBeers.find(beer => beer._id === id)


    return (
        <>
            <Navbar />
            <Container>
                <img src={selectedBeer.image_url} className="mb-3" style={{ width: '120px', margin: 'auto', height: '40vh', textAlign: 'center', display: 'block' }} alt="" />
                <h2>{selectedBeer.name}</h2>
                <h3>{selectedBeer.tagline}</h3>
                <p>{selectedBeer.first_brewed}</p>
                <p>{selectedBeer.attenuation_level}</p>
                <p>{selectedBeer.description}</p>
            </Container>
        </>


    )
}

export default SingleBeerPage