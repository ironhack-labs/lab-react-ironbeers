import Header from "./Header";
import { Link } from "react-router-dom";

function ListBeers({ beers }) {
  return (
    <div>
      <Header />
      {beers.map((beer) => {
        return (
          <div
            key={beer._id}
            className='card d-flex flex-row'
            style={{ width: "30rem" }}
          >
            <img
              src={beer.image_url}
              className='card-img-top'
              alt={beer.name}
            />
            <div className='card-body'>
              <h5 className='card-title'>
                <Link
                  className='list-group-item list-group-item-action'
                  to={`/beers/${beer._id}`}
                >
                  {beer.name}
                </Link>
              </h5>
              <p className='card-text' style={{ color: "grey" }}>
                {beer.tagline}
              </p>
              <p className='card-text'>
                <span style={{ fontWeight: "bold" }}>Created By: </span>
                {beer.contributed_by}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListBeers;
