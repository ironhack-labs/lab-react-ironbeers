import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

function BeersCards({ beer, i }) {
  return (
    <Link to={`/beers/${beer._id}`}>
      <div class="card mb-3" style={{maxWidth:"540px"}} >
        <div class="row no-gutters">
          <div class="col-md-4" style={{display:"flex", justifyContent:"center"}}>
            <img src={beer.image_url} class="card-img" alt="..." style={{ display: "block", maxWidth:"230px", maxHeight:"150px",width: "auto", height: "auto" }} />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{beer.name}</h5>
              <p class="card-text">{beer.tagline}</p>
              <p class="card-text"><small class="text-muted"> Created By: {beer.contributed_by}</small></p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BeersCards;