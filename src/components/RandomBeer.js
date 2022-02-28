import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function RandomBeer(props) {
  const [randomBeer, setRandomBeer] = useState(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        console.log("response.data", response.data);
        setRandomBeer(response.data);
        setFetching(false);
      });
  }, []);

  return (
    <div>
      <header>
        <Link to="/">home</Link>
      </header>

      {fetching && <div></div>}
      {randomBeer && (
        <>
          <div key={randomBeer._id}>
            <img src={randomBeer.image_url} style={{ height: "360px" }} alt="" />
            <div>
              <div>
                <h4>{randomBeer.name}</h4>
                IBU: {randomBeer.ibu}
                <h5>{randomBeer.tagline}</h5>
                <strong>
                  First brewed: <br />
                  {randomBeer.first_brewed}
                </strong>
                <div>
                  {randomBeer.description}
                </div>
                <div>
                  Contributed by: <br />
                  {randomBeer.contributed_by}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
//I structure with <div> cuz CSS is too tricky for me 
export default RandomBeer;
