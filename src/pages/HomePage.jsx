import beersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page-wrapper">
        <Link to="/beers">
      <section className="home-page-item">
          <img src={beersImg} alt="All Beers image" />
          <h2>All Beers</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            blanditiis quo sapiente neque porro quisquam sit explicabo nostrum
            praesentium quam quibusdam quia iusto, maiores ipsum pariatur qui
            in, sequi magnam? Similique vitae magnam asperiores consequatur
            exercitationem nobis, tempora dolores animi.
          </p>
      </section>
        </Link>
        <Link to="/random-beer">
      <section className="home-page-item">
          <img src={randomBeerImg} alt="Random Beer image" />
          <h2>Random Beer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            voluptate quae qui fugiat rerum blanditiis vero sit, officiis
            impedit dolorem dignissimos hic animi soluta perferendis debitis
            iste voluptatum, aperiam dolorum iusto quis aut voluptas explicabo.
            Veritatis facere adipisci alias tempora accusamus eius eaque ipsum
            unde doloremque magni, illo debitis!
          </p>
      </section>
        </Link>
        <Link to="/new-beer">
      <section className="home-page-item">
          <img src={newBeerImg} alt="New Beer image" />
          <h2>New Beer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, eum nisi magni soluta officia, ex, explicabo delectus
            fugit ullam in minus nam repudiandae corrupti. Delectus aspernatur
            sint exercitationem reiciendis consectetur magnam, deleniti iure hic
            placeat saepe, minus veritatis odio laboriosam! Accusamus unde
            recusandae eaque ad quaerat illo minima fugit soluta.
          </p>
      </section>
        </Link>
    </div>
  );
}

export default HomePage;
