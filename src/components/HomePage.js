import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <nav>
      <div>
        <NavLink to="/">Home</NavLink> |<NavLink to="/beers"> Beers</NavLink> |
        <NavLink to="/random-beer"> Random Beer</NavLink> |
        <NavLink to="/new-beer"> New Beer</NavLink>
      </div>
    </nav>
  );
};

export default HomePage;
