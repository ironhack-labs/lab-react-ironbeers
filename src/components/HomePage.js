import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div>
        <img src="../assets/beers.png" alt="beers"></img>
        <Link to="/beers">All Beers</Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat
          enim id nulla vehicula tincidunt. Aenean et malesuada orci. Vivamus
          nulla diam, scelerisque non nisi eu, rhoncus fermentum neque. Sed
          pharetra semper varius. Integer ut ultrices turpis. Donec ac nisl
          magna.
        </p>
      </div>
      <div>
        <img src="../assets/random-beer.png" alt="beers"></img>
        <Link to="/random-beer">Random Beer</Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat
          enim id nulla vehicula tincidunt. Aenean et malesuada orci. Vivamus
          nulla diam, scelerisque non nisi eu, rhoncus fermentum neque. Sed
          pharetra semper varius. Integer ut ultrices turpis. Donec ac nisl
          magna.
        </p>
      </div>
      <div>
        <img src="../assets/new-beer.png" alt="beers"></img>
        <Link to="/new-beer">Create</Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat
          enim id nulla vehicula tincidunt. Aenean et malesuada orci. Vivamus
          nulla diam, scelerisque non nisi eu, rhoncus fermentum neque. Sed
          pharetra semper varius. Integer ut ultrices turpis. Donec ac nisl
          magna.
        </p>
      </div>
    </>
  );
}

export default HomePage;
