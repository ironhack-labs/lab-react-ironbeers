import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <>
      <NavLink to={"/beers"} className="card">
        <img src="./src/assets/beers.png"></img>
        <h1>All Beers</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste totam
          maxime facilis eius, magni accusantium impedit delectus suscipit eos
          commodi reiciendis eligendi illum corrupti perspiciatis temporibus
          omnis voluptatibus! Sit, vitae.
        </p>
      </NavLink>

      <NavLink to={"/random-beer"} className="card">
        <img src="./src/assets/random-beer.png"></img>
        <h1>Random Beers</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste totam
          maxime facilis eius, magni accusantium impedit delectus suscipit eos
          commodi reiciendis eligendi illum corrupti perspiciatis temporibus
          omnis voluptatibus! Sit, vitae.
        </p>
      </NavLink>

      <NavLink to={"/new-beer"} className="card">
        <img src="./src/assets/new-beer.png"></img>
        <h1>New Beer</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste totam
          maxime facilis eius, magni accusantium impedit delectus suscipit eos
          commodi reiciendis eligendi illum corrupti perspiciatis temporibus
          omnis voluptatibus! Sit, vitae.
        </p>
      </NavLink>
    </>
  );
}

export default HomePage;
