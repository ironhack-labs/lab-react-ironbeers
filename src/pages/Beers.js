import Header from "../components/Header";
import { Link } from "react-router-dom";

function Beers({ beersAll }) {
  if (!beersAll) return <p>Page is loading... ❤</p>;

  return (
    <div className="App">
      <Header />
      <h1>Beers for all!</h1>
      {beersAll?.map((beer) => (
        <div key={beer._id}>
          <Link to={`/beers/${beer._id}`}>
            <div className="card-beer">
              <div className="image-beer-list">
                <img src={beer.image_url} alt="beer" />
              </div>
              <div className="info-beer-list">
                <h3>{beer.name}</h3>
                <h4>{beer.tagline}</h4>
                <p>
                  <b>Created by: </b>
                  {beer.name}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Beers;
