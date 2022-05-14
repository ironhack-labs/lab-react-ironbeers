// display all beers
import Header from "./Header";
import {Link} from 'react-router-dom'

function ListBeers(props) {
  return (
    <>
      <Header/>
      {props.beersList ? (
        props.beersList.map((beer) => {
          console.log(beer);
          return (
            <div class="card mb-3" style={{ maxwidth: "540px" }} key={beer._id}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src={beer.image_url}
                    class="img-fluid rounded-start"
                    alt={beer.name}
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{beer.name}</h5>
                    <p class="card-text">{beer.tagline}</p>
                    <p class="card-text">
                      <small class="text-muted">Created by {beer.contributed_by}</small>
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
