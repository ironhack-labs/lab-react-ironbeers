import { NavLink, useParams, Link } from "react-router-dom";

const SingleBeer = ({ beersArr }) => {
  const { beerId } = useParams();

  /*
  1. data from API is fetched
  2. data still not there, therefore beersArr undefinde (asynchronous JS)
  3. if beersArr is not yet defined, show the picture (or sth else) and go back to App.js
  4. in app.js the state of the array is update (with the API data)
  5. the conditions here are not true anymore and the code underneath is executed successfully
  */
  if (beersArr === undefined && beersArr.length > 0) {
    return (
      <div>
        <img
          src="https://s3.memeshappen.com/memes/I-DON39T-ALWAYS-WAIT-FOR-A-LONG-TIME-FOR-A-WEBSITE-TO-LOAD-BUT-WHEN-I-DO-IT-LOADS-AT-THE-VERY-SAME-TIME-I-CLOSE-THE-BROWSER-meme-405.jpg"
          alt="meme about waiting"
        />
      </div>
    );
  }

  const oneSingleBeer = beersArr.find((beerDetails) => {
    return beerDetails._id === beerId;
  });

  return (
    <div>
      <nav>
        <NavLink className="App-link" to="/">
          Home
        </NavLink>
      </nav>
      {beersArr === null ? (
        "loading beers ..."
      ) : (
        <div>
          <img src={oneSingleBeer.image_url} alt="a beer" />
          <h2>Title: {oneSingleBeer.name}</h2>
          <p>Tagline: {oneSingleBeer.tagline}</p>
          <p>First Brewed: {oneSingleBeer.first_brewed}</p>
          <p>Attenuation Level: {oneSingleBeer.attenuation_level}</p>
          <p>Description: {oneSingleBeer.description}</p>
          <p>Contributed by: {oneSingleBeer.contributed_by}</p>
        </div>
      )}
      <Link to="/beers">Back</Link>
    </div>
  );
};

export default SingleBeer;
