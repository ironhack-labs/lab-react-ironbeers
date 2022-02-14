import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { GetBeers } from '../../utils/apiCall';

function BeerDetails(props) {
  const { beerId } = useParams();
  const { data, loading } = GetBeers(beerId);

    return (
      <div>
        <Navbar />
        <h1>Details</h1>
        {loading ? (
          <h4>Loading ...</h4>
        ) : (
          <>
            <img alt={data.name} src={data.image_url} />
            <h2>{data.name}</h2>
            <p>{data.tagline}</p>
            <p>{data.first_brewed}</p>
            <p>{data.attenuation_level}</p>
            <p>{data.description}</p>
            <p>{data.contributed_by}</p>
          </>
        )}
      </div>
    );
}

export default BeerDetails;