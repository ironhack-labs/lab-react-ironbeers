import { NavLink, Link } from "react-router-dom";

function AllBeers(props) {
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <NavLink to="/">Home</NavLink>
      </nav>
      <h1>List of all beers</h1>

      <div>
        {props.beersArr.map((beer) => (
          <div className="card">
            <h3>{beer.name}</h3>
            <p>
              <img src={beer.image_url} alt="beerpic" />
            </p>
            <p> tagline: {beer.tagline}</p>
            <p> Contributed by: {beer.contributed_by}</p>

            <Link to={"/beers/" + beer._id}>More Details</Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllBeers;
