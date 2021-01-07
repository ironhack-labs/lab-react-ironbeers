import React from "react";

import { NavLink } from "react-router-dom";

const Home = (props) => {
    console.log(props)
  return (
    <div >
      <h1>Home page</h1>
      <nav style={{display:"flex", flexDirection: "column"}}>
      <NavLink exact to="/beers">
        <img src="https://unsplash.com/photos/nCxCBnK6UKQ"></img>
        <h1>All Beers</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </NavLink>
      <NavLink exact to="/random-beer">
      <img src="https://unsplash.com/photos/nCxCBnK6UKQ"></img>
        <h1>Random Beers</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </NavLink>
      <NavLink exact to="/new-beer">
      <img src="https://unsplash.com/photos/nCxCBnK6UKQ"></img>
        <h1>New Beers</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </NavLink>
    </nav>
    </div>
  );
};

export default Home;