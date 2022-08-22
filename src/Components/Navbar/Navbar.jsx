import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar bg-teal-50">
        <div className="flex-1">
          <Link to={"/"}>
            <p className="btn btn-ghost normal-case text-xl">
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/food-and-drinks/beer-mug-icon.png"
                className="w-6 mr-2"
                alt=""
              />
              IRONBEERS
            </p>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to={"/Beers"}>
                <p>Beers</p>
              </Link>
            </li>

            <li>
              <Link to={"/RandomBeer"}>
                <p>Random Beers</p>
              </Link>
            </li>

            <li>
              <Link to={"/NewBeer"}>
                <p>Add New Beer</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
