import React from "react";
import { Link } from "react-router-dom";

const links = [
  { label: "All Beer", path: "/content/beers", className: "allBeer" },
  {
    label: "Random Beer",
    path: "/content/randomBeer",
    className: "randomBeer"
  },
  { label: "New Beer", path: "/content/newBeer", className: "newBeer" }
];

const Home = () =>
  links.map(link => (
    <div className={`${link.className} homeLink`}>
      <Link to={link.path}>{link.label}</Link>
    </div>
  ));

export default Home;
