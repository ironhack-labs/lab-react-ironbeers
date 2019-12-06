import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

function BeersCards({ beers }) {
  return (
    <div>
      <Link to="/beers">
        <div class="card" >
          <img src="/images/beers.png" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">All Beeers</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nobis repellendus itaque distinctio tempora quae amet! Delectus repudiandae minima fugiat consequatur aut molestias soluta, ad accusantium odit obcaecati est cum!</p>
          </div>
        </div>
      </Link>

      <Link to="/random-beer">
        <div class="card" >
          <img src="/images/random-beer.png" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">Random Beer</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nobis repellendus itaque distinctio tempora quae amet! Delectus repudiandae minima fugiat consequatur aut molestias soluta, ad accusantium odit obcaecati est cum!</p>
          </div>
        </div>
      </Link>
      <Link to="/new-beer">
        <div class="card" >
          <img src="/images/new-beer.png" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">New Beer</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nobis repellendus itaque distinctio tempora quae amet! Delectus repudiandae minima fugiat consequatur aut molestias soluta, ad accusantium odit obcaecati est cum!</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BeersCards;