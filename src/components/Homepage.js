import { NavLink } from "react-router-dom";
import "./Homepage.css";

function Homepage() {
  return (
    <div>
      <img
        className="images-home"
        src="https://res.cloudinary.com/dohwegeh8/image/upload/v1659133219/beers_fpfxuv.png"
        alt="beers"
      />
      <h1>
        <NavLink className="header-home" to="/beers">
          All Beers
        </NavLink>
      </h1>
      <p className="description-home">
        An exquisite selection of beers await. Go to the link below to elevate
        your senses and find out that the sky is the limit when it comes to
        beers
      </p>
      <div className="line-home"></div>
      <img
        className="images-home"
        src="https://res.cloudinary.com/dohwegeh8/image/upload/v1659133219/new-beer_r99cuv.png"
        alt="beers"
      />
      <h1>
        <NavLink className="header-home" to="/beers/random/">
          Random Beers
        </NavLink>
      </h1>
      <p className="description-home">
        Feeling adventurous? Join us in the art of randomness. Once you access
        this section, you will find the right (or almost right) beer that we
        selected for you.
      </p>
      <div className="line-home"></div>
      <img
        className="images-home"
        src="https://res.cloudinary.com/dohwegeh8/image/upload/v1659133219/random-beer_ig1w9x.png"
        alt="beers"
      />

      <h1>
        <NavLink className="header-home" to="/new">
          New Beers
        </NavLink>
      </h1>
      <p className="description-home">
        Contribute with the elixir of your choice (as long as it is a beer). Let
        the world know that there are other beers out there
      </p>
      <div className="line-home"></div>
      <img
        className="images-home"
        src="https://res.cloudinary.com/dohwegeh8/image/upload/v1659223222/Spinning-wheel_wquaz8.png"
        alt="spinning-wheel"
      />
      <h1>
        <NavLink className="header-home" to="/beers/random/spinning">
          Spinning Beers
        </NavLink>
      </h1>
      <p className="description-home">
        Wanna get dizzy? Try this one, you will fetch a single beer in an
        infinite loop because you forgot to ad an empty dependency array smarty
        pants!!
      </p>
    </div>
  );
}

export default Homepage;
