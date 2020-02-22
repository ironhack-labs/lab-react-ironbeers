import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome Homies</h1>

      <div className="box">
        <Link to="/beers">
          <img src="./images/beers.png" alt="" />
          <h2>All Beers</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
          quae iste. Enim a saepe fugiat id ipsa vel, et ut quo illum rerum eum,
          quis adipisci nesciunt perferendis qui soluta?
        </p>
      </div>

      <div className="box">
        <Link to="/random-beer">
          <img src="./images/random-beer.png" alt="" />
          <h2>Random Beer</h2>
        </Link>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
          recusandae eum nostrum a facilis, nulla cupiditate libero adipisci
          doloremque placeat vitae. A assumenda culpa perspiciatis eaque aliquid
          consequuntur, veritatis deserunt.
        </p>
      </div>

      <div className="box">
        <Link to="/new-beer">
          <img src="./images/new-beer.png" alt="" />
          <h2>New Beer</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
          praesentium fuga nihil, fugit aliquid dolorem ducimus odio, iusto
          accusamus ab temporibus molestias rem quod tempore excepturi modi non
          consectetur cumque!
        </p>
      </div>
    </div>
  );
}
