import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ display: 'flex', alignItems:'center', justifyContent: 'center', flexDirection: 'column', margin: '10px'}}>
      <div className="card" style={{  width: "18rem", border: 'solid'}}>
        <img src="/images/beers.png" className="card-img-top" alt="..." style={{width: "285px", height: "200px" }} />
        <div className="card-body">
          <Link to="/AllBeers">All Beers</Link>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card"s
            content.
          </p>
        </div>
      </div>
      <div className="card" style={{ width: "18rem", border: 'solid'}}>
        <img src="/images/random-beer.png" className="card-img-top" alt="..." style={{ width: "285px", height: "200px" }}/>
        <div className="card-body">
          <Link to="/RandomBeer">Random Beer</Link>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card"s
            content.
          </p>
        </div>
      </div>
      <div className="card" style={{ width: "18rem", border: 'solid' }}>
        <img src="  /images/new-beer.png" className="card-img-top" alt="..." style={{ width: "285px", height: "200px" }}/>
        <div className="card-body">
          <Link to="/newBeer">New Beer</Link>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card"s
            content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
