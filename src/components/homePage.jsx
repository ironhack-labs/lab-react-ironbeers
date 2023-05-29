import { Link } from "react-router-dom";
import allBeers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'
import Beers from "./beers";
import RandomBeer from "./random-beer";
import NewBeer from "./newBeer";
 
function HomePage() {
  return (
      <div>
        <div>
        <img src={allBeers} alt="" />
        <Link to="/beers"> All Beers </Link>
        <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum dicta dolores culpa, consequatur ad, distinctio cupiditate dolorum, impedit alias maxime minima mollitia aperiam provident. Cum officiis quaerat repellat eaque facilis!</p>
        </div>

        <div>
        <img src={randomBeer} alt="" />
        <Link to="/randombeer"> Random Beers </Link>
        <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum dicta dolores culpa, consequatur ad, distinctio cupiditate dolorum, impedit alias maxime minima mollitia aperiam provident. Cum officiis quaerat repellat eaque facilis!</p>
        </div>
        
        <div>
        <img src={newBeer} alt="" />
        <Link to="/newbeer"> New Beers </Link>
        <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum dicta dolores culpa, consequatur ad, distinctio cupiditate dolorum, impedit alias maxime minima mollitia aperiam provident. Cum officiis quaerat repellat eaque facilis!</p>
        </div>
      </div>
  );
}
 
export default HomePage;