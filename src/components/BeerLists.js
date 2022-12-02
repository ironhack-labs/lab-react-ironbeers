import React from "react";
import { Link } from "react-router-dom";

const BeerLists = ({ beerList }) => {
  return (
    <>
      <p className="h1">Beer Lists</p>
      <div className="container overflow-hidden text-center">
        <div className="row gy-5">
          {beerList.map((elm, i) => {
            return (
              <div key={i} className="col-6">
                <Link to={`/beers/${elm._id}`}>
                  <div className="p-3 border bg-light">
                    Name : {elm.name} <br></br> {elm.tagline}
                    <br></br>
                    {elm.contributed_by}
                  </div>
                  {/* <div>{elm.tagline}</div> */}
                  <img src={elm.image_url} alt="img" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BeerLists;
