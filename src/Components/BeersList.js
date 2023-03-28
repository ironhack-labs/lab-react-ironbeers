import "./BeersList.css";
import { Link } from "react-router-dom";

const BeersList = ({ beers }) => {
  return (
    <div>
      {!beers ? (
        <p>Loading...</p>
      ) : (
        <div>
          {beers.map((beer) => {
            return (
              <Link className="link" to={`/beers/${beer._id}`} key={beer._id}>
                <div className="beers-list">
                  
                    <img className = "img-beers-all" src={beer.image_url} alt="beer" />
                 

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
