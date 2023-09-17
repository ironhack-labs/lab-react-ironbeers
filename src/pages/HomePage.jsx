import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <>
      <NavLink to={"/beers"}>
        <div>
          <img src="src\assets\beers.png" alt="beers" />
          <p>All Beers</p>
        </div>
      </NavLink>
      <NavLink to={"/random-beer"}>
        <div>
          <img src="src\assets\random-beer.png" alt="random" />
          <p> Random Beer</p>
        </div>
      </NavLink>
      <NavLink to={"/new-beer"}>
        <div>
          <img src="src\assets\new-beer.png" alt="new-beer" />
          <p> New Beer</p>
        </div>
      </NavLink>
    </>
  );
}

export default HomePage;
