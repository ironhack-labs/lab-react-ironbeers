import {Link} from 'react-router-dom';
import beers from "../assets/beers.png";
import newbeer from '../assets/new-beer.png';
import randombeer from "../assets/random-beer.png";


function HomePage() {
  return (

    
    <div>

        <h1 >Home</h1>
        <label>
        <img src={beers} alt="beers" />
      <Link to="/beers">List of Beers</Link>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, qui doloremque distinctio maxime magnam necessitatibus quos itaque placeat iusto odio quas minima minus aliquam facilis rerum tempora quia. Voluptate, ipsam.</p>
        </label>

        <label>
        <img src={newbeer} alt="newbeer" />
        <Link to="/new-beer">New Beer</Link>

      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, qui doloremque distinctio maxime magnam necessitatibus quos itaque placeat iusto odio quas minima minus aliquam facilis rerum tempora quia. Voluptate, ipsam.</p>

        </label>
        <label>

        <img src={randombeer} alt="randombeer" />
        <Link to="/random-beer">Random Beer</Link>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, qui doloremque distinctio maxime magnam necessitatibus quos itaque placeat iusto odio quas minima minus aliquam facilis rerum tempora quia. Voluptate, ipsam.</p>

        </label>

    </div>
  );
}
export default HomePage