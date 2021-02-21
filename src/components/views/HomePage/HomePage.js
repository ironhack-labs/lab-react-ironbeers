import React from 'react';

import { Link } from 'react-router-dom';

export default function HomePage() {
    const style ={
        color: "black",
         textDecoration: "none",
    }
    
  return (
    <main>
    <Link to="/beers" style ={style}>
    <section id="All Beers">
        <img src="./images/allBeers.PNG" alt="" />
        <article>
          <h2>All Beers</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            fuga reiciendis odio nulla asperiores aperiam ipsum et explicabo,
            provident tempora aspernatur, pariatur id consequuntur eum ducimus,
            accusantium nostrum consequatur nihil.
          </p>
        </article>
      </section>
    </Link>
    <Link to="/beers/random" style ={style}>
      <section id="randomBeer">
        <img src="./images/randomBeer.PNG" alt="" />
        <article>
        <h2>Random Beer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            fuga reiciendis odio nulla asperiores aperiam ipsum et explicabo,
            provident tempora aspernatur, pariatur id consequuntur eum ducimus,
            accusantium nostrum consequatur nihil.
          </p>
        </article>
      </section>
      </Link>
      <Link to="/new-beer" style ={style}>
      <section id="newBeer">
        <img src="./images/newBeer.PNG" alt="" />
        <article>
        <h2>New Beer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            fuga reiciendis odio nulla asperiores aperiam ipsum et explicabo,
            provident tempora aspernatur, pariatur id consequuntur eum ducimus,
            accusantium nostrum consequatur nihil.
          </p>
        </article>
      </section>
      </Link>
    </main>
  );
}
