import { useEffect, useState } from "react";

function RandomBeer(props) {
    
    const [beer, setSingleBeer] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

  async function fetchBeers(setter) {
    const beerJSON = await fetch(`https://ih-beers-api2.herokuapp.com/beers/random`);
    const parsed = await beerJSON.json();
    setter(parsed);
    setIsFetching(false);
  }

  useEffect(() => {
    if (isFetching) {
      fetchBeers(setSingleBeer);
    }
  }, [isFetching, setSingleBeer]);


  return (isFetching ? (
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
        <h1>{beer.name}</h1>
        <>
            <div className="card">
            <div>
              
              <img
                src={beer.image_url}
                alt={beer.name}
                style={{ height: "100px" }}
              />
            </div>
            <div>
              <p>{beer.tagline}</p>
              <p>First brewed: {beer.first_brewed}</p>
              <p>Attenuation Level: {beer.attenuation_level}</p>
              <p>{beer.description}</p>
              <p>{beer.contributed_by}</p>
            </div>
            {/* <Link to="/">Back</Link> */}
          </div>
          </>
        
      </div>
    </div>)
  );
}

export default RandomBeer;
