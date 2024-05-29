import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        margin: "auto",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Link to="/beers">
        <div
          style={{
            width: "30vw",
            height: "10vh",
          }}
        >
          ALL BEERS
        </div>
      </Link>
      <Link
        to="/random-beer"
        style={{
          width: "30vw",
          height: "10vh",
        }}
      >
        <div>RANDOM BEER</div>
      </Link>
      <Link
        to="/new-beer"
        style={{
          width: "30vw",
          height: "10vh",
        }}
      >
        <div>THE NEW BEER</div>
      </Link>
    </div>
  );
}

export default Navbar;
