import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function BeerDetailCard({ beer }) {
    return (
        <div class="card" style={{ maxWidth: "540px" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={beer.image_url} alt="" style={{ display: "block", maxWidth: "130px", maxHeight: "150px", width: "auto", height: "auto" }} />
            </div>
            <div class="card-body">
                <h5 class="card-title">{beer.name}</h5>
                <h6>{beer.tagline}</h6>
                <p class="card-text">{beer.description}</p>
                <p class="card-text"><small class="text-muted">{beer.contributed_by}</small></p>
            </div>
        </div>
    );
}

export default BeerDetailCard;

