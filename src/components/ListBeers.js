// display all beers
import Header from "./Header";
import { Link } from "react-router-dom";

function ListBeers(props) {
  return (
    <>
      <Header />
      {props.beersList ? (
        props.beersList.map((beer) => {
          console.log(beer);
          return (
            <div
              className="card mb-3"
              style={{ maxwidth: "540px" }}
              key={beer._id}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={beer.image_url}
                    className="img-fluid rounded-start"
                    alt={beer.name}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{beer.name}</h5>
                    <p className="card-text">{beer.tagline}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        Created by {beer.contributed_by}
                      </small>
                    </p>
                    <Link to={`/beerdetails/${beer._id}`}>More Details</Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p> Loading....</p>
      )}
    </>
  );
}

export default ListBeers;
