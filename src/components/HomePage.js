import { NavLink } from "react-router-dom";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

function HomePage() {
  return (
    <>
      <NavLink to="/beers">
        <img src={beers} alt="beers" />
        <h2>All Beers</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui maiores
          eligendi voluptates quia, blanditiis nesciunt veniam itaque adipisci
          obcaecati nisi!
        </p>
      </NavLink>
      <NavLink to="/random-beer">
        <img src={newBeer} alt="random-beer" />
        <h2>Random Beer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quas
          ratione ab in laboriosam enim, inventore veniam optio tenetur? Eos
          accusantium ea deserunt rem recusandae fuga repellat ratione tempora
          dicta! Ratione, quos.
        </p>
      </NavLink>
      <NavLink to="/new-beer">
        <img src={randomBeer} alt="new-beer" />
        <h2>New Beer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          eveniet saepe qui quam! Voluptates, quaerat quod? Nisi veniam error
          cumque sit eligendi quasi qui velit dignissimos magni blanditiis
          debitis aut maxime esse, fuga voluptatibus. Eos nobis, porro et quas
          atque commodi iste iusto iure. Natus?
        </p>
      </NavLink>
    </>
  );
}
export default HomePage;
