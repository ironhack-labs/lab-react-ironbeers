import { Link } from "react-router-dom";
function HomePage() {
    return(
        <>
          <div className="home-section">
            <Link to="/beers">
              <div className="beer-cards">
                <img src="./src/assets/beers.png" alt="Beers Image" />
                <h1>All Beers</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia veritatis alias, illum libero nisi eum ratione?<br></br> Exercitationem alias et reprehenderit neque dolorum atque assumenda, aspernatur perferendis laborum qui!</p>
              </div>
            </Link>
            <Link to="/random-beer">
              <div className="beer-cards">
                <img src="./src/assets/random-beer.png" alt="Random Beer Image" />
                <h1>Random Beer</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia veritatis alias, illum libero nisi eum ratione?<br></br>Exercitationem alias et reprehenderit neque dolorum atque assumenda, aspernatur perferendis laborum qui!</p>
              </div>
            </Link>
            <Link to="/new-beer">
              <div className="beer-cards">
                <img src="./src/assets/new-beer.png" alt="New Beer Image" />
                <h1>New beer</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia veritatis alias, illum libero nisi eum ratione?<br></br> Exercitationem alias et reprehenderit neque dolorum atque assumenda, aspernatur perferendis laborum qui!</p>
              </div>
            </Link>
          </div>
        </>
    )
}

export default HomePage;
