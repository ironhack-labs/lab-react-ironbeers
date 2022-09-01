import beer1 from "../assets/beers.png";
import beer3 from "../assets/new-beer.png";
import beer2 from "../assets/random-beer.png";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/AllBeers">
      <div className="home">
        <img className="beer1" src={beer1} alt="Pub and beers"></img>
        
        <h2>All Beers</h2>
        
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          magni, corrupti odit eos quibusdam laboriosam eius fuga! Alias,
          maiores totam optio nesciunt expedita autem aspernatur pariatur vel
          nobis facere delectus.
        </p>
      </div>
      </Link>
      <Link to="/RandomBeer">
      <div>
        <img className="beer2" src={beer2} alt="Pub and beers"></img>
        <h1 >Random Beer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          magni, corrupti odit eos quibusdam laboriosam eius fuga! Alias,
          maiores totam optio nesciunt expedita autem aspernatur pariatur vel
          nobis facere delectus.
        </p>
      </div>
      </Link>
      <Link to="/NewBeer">
      <div>
        <img className="beer3" src={beer3} alt="Pub and beers"></img>
        <h1>New Beer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          magni, corrupti odit eos quibusdam laboriosam eius fuga! Alias,
          maiores totam optio nesciunt expedita autem aspernatur pariatur vel
          nobis facere delectus.
        </p>
      </div>
      </Link>
    </div>
  );
};

export default Home;
