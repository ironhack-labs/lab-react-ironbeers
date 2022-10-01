import React from "react";
import { useNavigate } from "react-router-dom";

import beersImage from "../assets/beers.png";
import newBeerImage from "../assets/new-beer.png";
import randomBeerImage from "../assets/random-beer.png";

function Home() {
  const navigate = useNavigate();

  const articles = [
    {
      title: "All Beers",
      url: "/beers",
      image: beersImage,
    },
    {
      title: "Random Beer",
      url: "/random-beer",
      image: randomBeerImage,
    },
    {
      title: "New Beer",
      url: "/new-beer",
      image: newBeerImage,
    },
  ];

  return (
    <section>
      {articles.map((item) => {
        return (
          <article onClick={() => navigate(item.url)} key={item.title}>
            <img src={item.image} alt="beers" />
            <h1>{item.title}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              error cupiditate quia porro, dolore adipisci a ad vero possimus.
              Ullam necessitatibus iste voluptatum expedita incidunt voluptates
              in sint. Neque, dolores?
            </p>
          </article>
        );
      })}
    </section>
  );
}

export default Home;
