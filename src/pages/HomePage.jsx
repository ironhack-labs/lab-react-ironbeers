import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="homePage">
      <div className="homePageLinks">
        <Link
          to="/beers"
          className="homePagelink"
          style={{
            backgroundImage:
              "linear-gradient(to top, #000, rgba(0,0,0,0)), url(/src/assets/beers.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          All Beers
        </Link>

        <Link
          className="homePagelink"
          to="/random-beer"
          style={{
            backgroundImage:
              "linear-gradient(to top, #000, rgba(0,0,0,0)), url(/src/assets/random-beer.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          Random Beers
        </Link>

        <Link
          className="homePagelink"
          to="/new-beer"
          style={{
            backgroundImage:
              "linear-gradient(to top, #000, rgba(0,0,0,0)), url(/src/assets/new-beer.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          New Beers
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
