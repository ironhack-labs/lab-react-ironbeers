import Navbar from "../../components/Navbar";
import { GetBeers } from "../../utils/apiCall";
import { BASE_URL } from '../../utils/consts';

function RandomBeer() {
    const { data, loading } = GetBeers('/random');
    console.log(data);

    return (
      <div>
        <Navbar />
        <h1>Random Beer</h1>
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

export default RandomBeer;