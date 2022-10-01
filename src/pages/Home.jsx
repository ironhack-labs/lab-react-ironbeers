import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>IronBeers</h1>
      <article
        onClick={() => {
          navigate("/beers");
        }}>
        <h2>All Beers</h2>
      </article>
      <article
        onClick={() => {
          navigate("/random-beer");
        }}>
        <h2>Random Beer</h2>
      </article>
      <article
        onClick={() => {
          navigate("/new-beer");
        }}>
        <h2>New Beer</h2>
      </article>
    </div>
  );
}

export default Home;
