import { NavLink } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <img
        src="https://res.cloudinary.com/dohwegeh8/image/upload/v1659133219/beers_fpfxuv.png"
        alt="beers"
      />
      <h1>
        <NavLink to="/beers">All Beers</NavLink>
      </h1>
      <p>
        An exquisite selection of beers await. Go to the link below to elevate
        your senses and find out that the sky is the limit when it comes to
        beers
      </p>
      <img
        src="https://res.cloudinary.com/dohwegeh8/image/upload/v1659133219/new-beer_r99cuv.png"
        alt="beers"
      />
      <h1>
        <NavLink to="/random">Random Beers</NavLink>
      </h1>
      <p>
        Feeling adventurous? Join us in the art of randomness. Once you access
        this section, you will find the right (or almost right) beer that we
        selected for you.
      </p>
      <img
        src="https://res.cloudinary.com/dohwegeh8/image/upload/v1659133219/random-beer_ig1w9x.png"
        alt="beers"
      />

      <h1>
        <NavLink to="/new">New Beers</NavLink>
      </h1>
      <p>
        Contribute with the elixir of your choice (as long as it is a beer). Let
        the world know that there are other beers out there
      </p>
    </div>
  );
}

export default Homepage;
