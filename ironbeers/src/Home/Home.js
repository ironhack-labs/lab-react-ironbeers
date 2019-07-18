import React from "react";
import { Link } from "react-router-dom";
import AllBeersPict from "../img/beers.png";
import RandomBeerPict from "../img/random-beer.png";
import NewBeerPict from "../img/new-beer.png";

const Home = () => {
  return (
    <nav>
      <ul className="Home">
        <li>
          <Link to="/beers">
            <img src={AllBeersPict} alt="All Beers" />
          </Link>
          <h2>All Beers</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius odit, deserunt error repellat provident
            laudantium architecto nesciunt veniam ducimus accusamus voluptate
            enim non, unde quia nisi beatae reiciendis expedita? Blanditiis
            velit laudantium veniam corporis.
          </p>
        </li>
        <li>
          <Link to="/random-beer">
            <img src={RandomBeerPict} alt="Random Beer" />
          </Link>
          <h2>Random Beer</h2>
          <p>
            Molestias natus architecto iusto voluptatibus similique quis dolor
            doloribus perferendis laboriosam possimus, ipsum quisquam quia,
            eveniet distinctio sed tempora obcaecati accusantium eaque
            blanditiis ipsa esse! Eos, itaque. Nemo, distinctio quasi sequi
            ipsum quae dolore. Odit optio deserunt, cupiditate nam consequatur
            dicta qui sed laborum voluptatibus, alias ducimus aspernatur
            temporibus dolorem maiores iste sint laudantium. Reprehenderit.
          </p>
        </li>
        <li>
          <Link to="/new-beer">
            <img src={NewBeerPict} alt="New Beer" />
          </Link>
          <h2>New Beer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius odit, deserunt error repellat provident
            laudantium architecto nesciunt veniam ducimus accusamus voluptate
            enim non, unde quia nisi beatae reiciendis expedita? Blanditiis
            velit laudantium veniam corporis.
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default Home;
