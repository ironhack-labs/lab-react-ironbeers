import React from "react";
import { Link } from "react-router-dom";
import LoremIpsum from 'react-lorem-ipsum'



function Beers() {
  // const [beers, setBeers] = useState([]);

    return (
      <>
        <div className="Beers">
          <Link to="/beers">
            <h3>All Beers</h3>
            <LoremIpsum p={1} />
          </Link>
        </div>
        <div className="RandomBeer">
          <Link to="/random-beer">
            <h3>Random Beer</h3>
            <LoremIpsum p={1} />
          </Link>
        </div>
        <div className="NewBeer">
          <Link to="/new-beer">
            <h3>New Beer</h3>
            <LoremIpsum p={1} />
          </Link>
        </div>
      </>
    );
  }
  
  export default Beers;