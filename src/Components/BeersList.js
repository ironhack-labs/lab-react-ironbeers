import "./BeersList.css";
import { Link } from "react-router-dom";

const BeersList = ({ beers }) => {
  return (
    <div>
      {!beers ? (
        <p>Loading...</p>
      ) : (
        <div className="beers-list">
          {beers.map((beer) => {
            return (
              <Link to={`/beers/${beer._id}`} key={beer._id}>
                <div>
                  <div className="beer-image">
                    <img src={beer.image_url} alt="beer" />
                  </div>

                  <div className="beer-information">
                    <h3>{beer.name}</h3>
                    <h5>{beer.tagline}</h5>
                    <p>
                      <b>Created by: </b>
                      {beer.contributed_by}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BeersList;
