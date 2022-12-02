import Header from "./Header";
import { Link } from "react-router-dom";

const BeersList = ({ beers }) => {

  return (
    <div className="Beerlist">
      <Header />
      <h1 className="container justify-content-center">List of Beers</h1>
      {beers.map((beer) => (
        <div className="d-flex p-5 border-bottom my-3" key={beer._id}>
          <Link className="d-flex text-decoration-none link-dark" to={`/${beer._id}`} >
            <img src={beer.image_url} alt="beer" height="300" width="150" />
            <div className="p-5">
              <h1>{beer.name}</h1>
              <p>{beer.tagline}</p>
              <p>Created by: {beer.contributed_by}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>

  )
}

export default BeersList;