import React from 'react'
import { Link } from "react-router-dom";
import "../styles/home.css"

const Home = () => {
    return (
        <div id="main-home-beers">
            <h1>I am the Home page!</h1>
            <div className="beer-home">
                <Link to="/allBeers">
                    <img src="https://www.marketingtochina.com/wp-content/uploads/2019/11/26-052442-man_goes_on_beer_only_diet_loses_25_pounds.jpg" alt="beers" width="400px"/>
                    <h2>All Beers</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiTemporibus tenetur consequatur provident non, veritatis repelleniciis aperiam? Odio ipsam a cum aliquam.</p>
                </Link>
            </div>
            <div className="beer-home">
                <Link to="/RandomBeer">
                    <img src="https://www.marketingtochina.com/wp-content/uploads/2019/11/26-052442-man_goes_on_beer_only_diet_loses_25_pounds.jpg" alt="beers" width="400px"/>
                    <h2>Random Beer</h2>
                    <p>Loea repudiandae placeat. Temporibus tenetur consequatur provident non, veritatis repellendus, ratioofficiis aperiam? Odio ipsam a cum aliquam.</p>
                </Link>
            </div>
            <div className="beer-home">
                <Link to="/NewBeer">
                    <img src="https://www.marketingtochina.com/wp-content/uploads/2019/11/26-052442-man_goes_on_beer_only_diet_loses_25_pounds.jpg" alt="beers" width="400px"/>    
                    <h2>New Beer</h2>
                    <p>Lorem ipsum dolor seat. Temporibus tenetur consequatur provident non, veritatis repellendus, ratione distinctio nat aliquam.</p>
                </Link>            
            </div>
        </div>
    )
}

export default Home
