import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="row">
      <div className="col-sm">
        <Link to="/beers">
          <img src="/images/beers.png" alt="" className="img-fluid mb-3" />
        </Link>
        <h2>View All Beers</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit similique aperiam, at ea reiciendis, ipsa corrupti suscipit ipsam magni quos ipsum consectetur
          obcaecati soluta. Fugiat aliquam quod dolor ad ratione!
        </p>
        <Link to="/random">
          <img src="/images/random-beer.png" alt="" className="img-fluid mb-3" />
        </Link>
        <h2>Get a Random Beer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit similique aperiam, at ea reiciendis, ipsa corrupti suscipit ipsam magni quos ipsum consectetur
          obcaecati soluta. Fugiat aliquam quod dolor ad ratione!
        </p>
        <Link to="/add">
          <img src="/images/new-beer.png" alt="" className="img-fluid mb-3" />
        </Link>
        <h2>Add your Beer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit similique aperiam, at ea reiciendis, ipsa corrupti suscipit ipsam magni quos ipsum consectetur
          obcaecati soluta. Fugiat aliquam quod dolor ad ratione!
        </p>
      </div>
    </div>
  );
}
