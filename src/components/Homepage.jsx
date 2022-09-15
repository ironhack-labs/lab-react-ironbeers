import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <section>
        <img src={require("../assets/beers.png")} alt="all_beers" />

        <Link to="/beers">All Beers</Link>
        <p>
          Lorem ipsum dolor sit amet. In cupiditate assumenda sit illo consequatur est earum quia qui doloremque atque ut omnis illum ut commodi. At aliquam
          necessitatibus hic porro libero et nobis fugiat et placeat voluptatibus. Sit voluptate galisum nam totam porro non amet suscipit quo iusto commodi aut
          dolores voluptas et dicta nisi aut sapiente possimus.
        </p>
      </section>
      <section>
        <img src={require("../assets/random-beer.png")} alt="random_beers" />

        <Link to="/randomBeer">Random Beer</Link>
        <p>
          Cum quos atque et molestias beatae eum quam vitae. Sit reiciendis animi non iusto fugiat non obcaecati asperiores est officiis voluptas ut quis quis
          ab possimus. Qui culpa voluptatibus ut quae vitae in beatae dignissimos vel itaque suscipit et consequatur mollitia hic rerum fugiat.
        </p>
      </section>
      <section>
        <img src={require("../assets/new-beer.png")} alt="new_beers" />
        <Link to="/newBeer">New Beer</Link>
        <p>
          Eos neque accusamus nam velit quod sed error voluptatum? Ut autem aspernatur At enim illum aut rerum quidem est quos facilis id repellat maiores. Et
          illum modi ut odio excepturi rem rerum commodi 33 excepturi unde 33 culpa nihil. Et quia nihil sit asperiores optio nam nihil dolorem et suscipit
          vitae!
        </p>
      </section>
    </>
  );
};

export default Homepage;
