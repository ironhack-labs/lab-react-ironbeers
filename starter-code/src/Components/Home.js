import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Link to={"/beers"} className="container-link">
          <img src="./images/beers.png" alt="All beers"/>
          <h1>All beers</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, corporis aperiam ducimus placeat aspernatur perferendis quibusdam. Omnis consectetur nostrum odit? Saepe velit ipsum id omnis ab, quos minus aperiam molestiae?</p>
        </Link>
        
        <Link to={"/random-beer"} className="container-link">
          <img src="./images/random-beer.png" alt="Random beer"/>
          <h1>Random beer</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorum placeat at quis voluptates harum? Qui expedita placeat nihil ducimus eum facilis voluptatum temporibus quae veniam. Ratione aut cupiditate nisi!</p>
        </Link>

        <Link to={"/new-beer"} className="container-link">
          <img src="./images/new-beer.png" alt="New beer"/>
          <h1>New beer</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat nobis magnam illo reiciendis esse earum numquam animi quibusdam quo voluptatum nihil cumque commodi mollitia sed consequatur, exercitationem minima voluptas.</p>
        </Link>
      </div>
    );
  }
}
