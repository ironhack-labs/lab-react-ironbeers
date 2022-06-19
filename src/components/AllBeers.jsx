import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeers() {
  const [beers, setBeers] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  async function fetchBeers(setter) {
    const beerJSON = await fetch("https://ih-beers-api2.herokuapp.com/beers");
    const parsed = await beerJSON.json();
    console.log(parsed);
    setter(parsed);
    setIsFetching(false);
  }

  useEffect(() => {
    if (isFetching) {
      fetchBeers(setBeers);
    }
  }, [isFetching, setBeers]);

  return isFetching ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <header>
        <a href="/">
          <img
            src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
            alt="Home"
          />
        </a>
      </header>
      <div>
        <h3>List of Beers</h3>
        {beers.map((beer) => (<>
            <div className="card">
            <div>
            <Link to={`/beers/${beer._id}`}>
              <img
                src={beer.image_url}
                alt={beer.name}
                style={{ height: "100px" }}
              />
              </Link>
            </div>
            <div>
              <p>{beer.name}</p>
              <p>{beer.tagline}</p>
              <p>{beer.contributed_by}</p>
            </div>
          </div>
          </>
        ))}
      </div>
      
    </div>
        
          
  );
}

export default AllBeers;
