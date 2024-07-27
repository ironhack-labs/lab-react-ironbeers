import { NavLink } from "react-router-dom";
import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-12 bg-gray-50">
      <NavLink to="/beers" className="w-full flex flex-col items-center">
        <img src={beers} alt="beers" className="w-full max-w-4xl mx-2" />
        <p className="text-xl text-center mt-2 uppercase">Todas las Cervezas</p>
      </NavLink>
      <NavLink to="/random-beer" className="w-full flex flex-col items-center">
        <img src={randomBeer} alt="randomBeer" className="w-full max-w-4xl mx-2" />
        <p className="text-xl text-center mt-2 uppercase">Cerveza Aleatoria</p>
      </NavLink>
      <NavLink to="/new-beer" className="w-full flex flex-col items-center">
        <img src={newBeer} alt="newBeer" className="w-full max-w-4xl mx-2" />
        <p className="text-xl text-center mt-2 uppercase">Nueva Cerveza</p>
      </NavLink>
    </div>
  );
}

export default HomePage;
