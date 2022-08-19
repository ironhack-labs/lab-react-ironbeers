import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://st4.depositphotos.com/8565046/20443/i/450/depositphotos_204432986-stock-photo-cold-glass-beer-background-bar.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">IRONBEERS</h1>
          <p className="mb-5"></p>
          <Link to={"/Beers"}>
            <button className="btn btn-outline">Browse All Beers</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
