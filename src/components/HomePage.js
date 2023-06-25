import { Link } from "react-router-dom";

function HomePage () {

        return (
            <div>
            <h1>This is the Home Page</h1>
            <section>
                <img src= "./assets/beers.png" alt="Beers"/>
                <h2><Link to="/beers">Beers</Link></h2>
            </section>
    
            <section>
                <img src="./assets/random-beer.png" alt="Random Beers"/>
                <h2><Link to="/random-beers">Random Beers</Link></h2>
            </section>
    
            <section>
                <img src="./assets/new-beer.png" alt="New Beers"/>
                <h2><Link to="/new-beers">New Beers</Link></h2>
            </section>
            </div>
          );
   }
   
   export default HomePage;



