import beer1 from "../assets/beers.png";
import beer3 from "../assets/new-beer.png";
import beer2 from "../assets/random-beer.png";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <Link to="/AllBeers">
      <div className="home-page-card">
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
      <div className="home-page-card">
        <img className="beer2" src={beer2} alt="Pub and beers"></img>
        <h2 >Random Beer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          magni, corrupti odit eos quibusdam laboriosam eius fuga! Alias,
          maiores totam optio nesciunt expedita autem aspernatur pariatur vel
          nobis facere delectus.
        </p>
      </div>
      </Link>
      <Link to="/NewBeer">
      <div className="home-page-card">
        <img className="beer3" src={beer3} alt="Pub and beers"></img>
        <h2>New Beer</h2>
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
