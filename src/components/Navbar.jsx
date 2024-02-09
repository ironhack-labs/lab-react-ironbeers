import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">
        <button>Go to Home page</button>
      </Link>
    </div>
  );
}
export default Navbar;
