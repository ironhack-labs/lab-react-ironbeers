import Header from './Header';
import { useParams } from 'react-router-dom';

function Beer({ beers }) {
    const { id } = useParams();

    const details = beers.find((beer) => beer._id === id);

    return (
        <div>
            <Header />
            <img src={details.image_url} alt={details.name} />
            <h2>{details.name}</h2>
            <p>{details.tagline}</p>
            <p>{details.first_brewed}</p>
            <p>{details.attenuation_level}</p>
            <p>{details.description}</p>
            <p>{details.contributed_by}</p>
        </div>
    );
}

export default Beer;