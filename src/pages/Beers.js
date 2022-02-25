import { useState, useEffect } from "react"; // <== IMPORT useEffect
import axios from "axios"; // <== IMPORT axios
import { Link, NavLink, useParams, useSearchParams } from "react-router-dom";

function BeersPage(props) {
  const [beers, setBeers] = useState([]);
  let api = "https://ih-beers-api2.herokuapp.com/beers";

  useEffect(() => {
    // <== ADD THE EFFECT
    axios.get(api).then((response) => {
      //console.log("response.data", response.data);
      setBeers(response.data);
    });
  }, []); // <- [] means: Run the effect only once, after initial render

  if (!beers) {
    return <p className="col-7"> Loading... </p>;
  }

  return (
    <div>
      <Link to={"/"}>
        <header className="color">
          <img src="" />
        </header>
      </Link>

      <h3>List of Beers</h3>
      {beers.map((item) => (
        <Link to={`/${item._id}`} key={item._id}>
          <div className="card">
            <img src={item.image_url} alt="item" />
            <h3>Name:{item.name}</h3>
            <p>Tagline: {item.tagline}</p>
            <p>Contributed by: {item.contributed_by}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BeersPage;
