import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
export default function BeerDetails(props) {
    const { beers } = props;
    const { beerId } = useParams();

    const renderDetails = () => {
        const foundBeer = beers.find((beer) => { return beer._id === beerId });
        return (
            <div className='SingleBeer'>
                <img src={foundBeer.image_url} alt={foundBeer.name} />
                <div>
                    <h2>Name:<br />{foundBeer.name}</h2>
                    <h3>{foundBeer.tagline}</h3>
                    <p>First brewed:<br />{foundBeer.first_brewed}</p>
                    <p>Attenuation level:<br />{foundBeer.attenuation_level}</p>
                    <p>Description:<br />{foundBeer.description}</p>
                    <p>Contributor:<br />{foundBeer.contributed_by}</p>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Link to="/">HOME</Link>
            <section>
                <h1>This is the BeerDetails Component</h1>
                {beers ? renderDetails() : <p>Loading...</p>}
            </section>
        </div>
    )
}

