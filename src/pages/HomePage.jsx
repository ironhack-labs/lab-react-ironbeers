import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Link to="/beers">
        <img src="src/assets/beers.png" alt="All Beers picture" />
        <div>
          <h2>All Beers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam
            dictum arcu ut dignissim varius.
          </p>
        </div>
      </Link>

      <Link to="/random-beer">
        <img src="src/assets/random-beer.png" alt="Random Beer picture" />
        <div>
          <h2>Random Beer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam
            dictum arcu ut dignissim varius.
          </p>
        </div>
      </Link>

      <Link to="/new-beer">
        <img src="src/assets/new-beer.png" alt="New Beer picture" />
        <div>
          <h2>New Beer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam
            dictum arcu ut dignissim varius.
          </p>
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
