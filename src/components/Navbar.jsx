import homeSymbol from "../assets/home.png";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
        <img src={homeSymbol} alt="home page" />
      </nav>
    </div>
  );
}

export default Navbar;
