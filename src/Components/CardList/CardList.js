import React from "react";
import { Link } from "react-router-dom";

const CardList = ({beerObj}) => {

    return(
        <div>
    <div key={beerObj._id} className="col-4 mb-3">
              <Link to={`/beers/${beerObj._id}`}>
                <div className="card" style={{ width: "18rem" }}>
                  <div style={{ height: "287px" }}>
                    <img
                                              src={
                        beerObj.image_url
                      }
                      className="card-img-top img-fluid"
                      alt={beerObj.name}
                      style={{  width:"08rem", maxHeight: "287px", objectFit: "" }}
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title text-black">{beerObj.name}</h3>
                    <h4 className="card-text text-black">{beerObj.tagline}</h4>
                    <p>Created by: {beerObj.contributed_by}</p>
                  </div>
                </div>
              </Link>
            </div>
        </div>
    )

    
};

export default CardList