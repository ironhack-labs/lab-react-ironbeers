import React from "react";

import './HomePage.css';

import View from "./View.js";

const homepage = () => {
  return (
    <div class="container is-fullhd" style={{ width: "600px" }}>
  <div class="notification">
    {/* <div className="homepage"> */}
      <View 
        link="/beers" 
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2tbguwu4Xx2aX-MhtpV_CV7XMO3QoK65H02Ci5PKjyjs6JTw9"
        title="All Beers" 
      />
      <View 
        link="/random-beer" 
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZJhdHnZ69GeN5dav5CiTd1fkVhdEHft2cLof00uyfj0rBAj0o3g" 
        title="Random Beer" 
      />
      <View 
        link="/new-beer" 
        img="http://malvernbeerexchange.files.wordpress.com/2012/04/negra-modelo.jpg" 
        title="New Beer" 
      />
    </div>
    </div>
  );
};

export default homepage;
