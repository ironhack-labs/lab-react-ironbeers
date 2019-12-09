import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <img src="../../images/beers.png" alt="" />
      <Link to="/beers">
        {" "}
        <h1>All Beers</h1>
      </Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
        provident. Ratione quaerat iure numquam magni perferendis rem placeat
        amet aperiam dolor reprehenderit repellat recusandae neque hic sunt
        fuga, vel officia?
      </p>

      <img src="../../images/beers.png" alt="" />
      <Link to="/random-beer">
        <h1>Random Beers</h1>
      </Link>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, voluptate
        at. Totam quod veniam labore, culpa doloribus, eos nisi veritatis dolor
        repudiandae quae, perferendis in! Quasi quos reprehenderit consequuntur
        quas?
      </p>
      <img src="../../images/beers.png" alt="" />
      <Link to="/new-beer">
        <h1>New Beer</h1>
      </Link>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, vel?
        Velit maxime nulla, perferendis laudantium, iusto nihil in assumenda
        cumque fuga vero provident magnam veritatis iure, optio illo eligendi
        quibusdam.
      </p>
    </div>
  );
}

export default Home;
