import React from 'react';



import { Link } from "react-router-dom";

export default function Home() {
  let cardStyle = {
    width: "200px",
    margin: "25px",
    boxShadow: "5px 4px 10px #a6a6a6",
  };

  return (
    <div>
      <Link to={`/beers`}>
      <div className="card" style={cardStyle}>
              <div className="card-body">
                <h5 className="card-title">All Beers</h5>
              </div>
            </div>
      </Link>

      <Link to={`/random-beer`}>
      <div className="card" style={cardStyle}>
              <div className="card-body">
                <h5 className="card-title">Random Beer</h5>
              </div>
            </div>
      </Link>

      <Link to={`/new-beer`}>
      <div className="card" style={cardStyle}>
              <div className="card-body">
                <h5 className="card-title">New Beer</h5>
              </div>
            </div>
      </Link>
    </div>
  );
}
