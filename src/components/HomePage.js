import React from "react";
import beers from "../assets/beers.png";
import random from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";
import { NavLink } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  const homeData = [
    { img: beers, title: "All Beers", path: "/beers" },
    { img: random, title: "Random Beer", path: "/random-beer" },
    { img: newBeer, title: "New Beer", path: "/new-beer" },
  ];
  return (
    <section className="Home-Page">
      {homeData.map((item, index) => (
        <HomeBeerCard {...item} key={index} />
      ))}
    </section>
  );
}

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at varius est, a bibendum dui. Cras semper vehicula mauris nec ultrices. Ut a semper mauris, at placerat nunc. Duis suscipit volutpat justo hendrerit sodales. Ut rutrum nunc leo, at imperdiet magna dapibus ut. Nulla facilisi. Nunc at maximus lacus.";

function HomeBeerCard({ img, title, path }) {
  return (
    <NavLink to={path}>
      <div className="Home-Card">
        <img src={img} alt="beer" />
        <h1>{title}</h1>
        <p>{loremIpsum}</p>
      </div>
    </NavLink>
  );
}
