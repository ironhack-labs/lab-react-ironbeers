import { Link } from "react-router-dom";
import beersPhoto from "../assets/beers.png";
import randomBeerPhoto from "../assets/random-beer.png";
import newBeerPhoto from "../assets/new-beer.png";

const Home = () => {
  return (
    <section className="homePage">
      <div>
        <img src={beersPhoto} alt="beers" />
        <div className="homePageInfo">
          <Link className="homePageTitle" to={"/beers"}>
            <h2> All Beers </h2>
          </Link>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt,
            excepturi itaque minima expedita iure molestias labore. Sunt, cum!
            Odit, labore illum sit quisquam ea facilis eligendi maiores iste hic
            nostrum?
          </p>
        </div>
      </div>

      <div>
        <img src={randomBeerPhoto} alt="randomBeer" />
        <div className="homePageInfo">
          <Link className="homePageTitle" to={"/random-beer"}>
            <h2>Random Beer</h2>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            dicta rem eligendi dolorem ipsam corporis rerum odit quis sint eius
            sunt iste consectetur, tempora, error quidem temporibus quasi nulla
            tempore?
          </p>
        </div>
      </div>

      <div>
        <img src={newBeerPhoto} alt="newBeer" />
        <div className="homePageInfo">
          <Link className="homePageTitle" to={"/new-beer"}>
            <h2>New Beer</h2>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
            dolorum cum excepturi necessitatibus reiciendis perferendis non quis
            facilis accusantium veniam, quam saepe maxime voluptatibus eum
            voluptatum vel temporibus libero quasi?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
