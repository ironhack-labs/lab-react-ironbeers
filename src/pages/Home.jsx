import React from 'react'
import { Link } from "react-router-dom";
import "../styles/home.css"

const Home = () => {
    return (
        <div id="main-home-beers">
            <div className="beer-home">
                <Link to="/allBeers">
                    <img src="https://s3-eu-west-1.amazonaws.com/sc-files.pjms.fr/p/pjms/772/000/326/650/c27ae0a4735b422487d288a819d69525.jpg" alt="beers" width="400px"/>
                    <div className="div-text-home">
                        <h2>All Beers</h2>
                        <br/>
                        <p>Lorem ipsum dolor sit amet consectetur adipiTemporibus tenetur consequatur provident non, veritatis repelleniciis aperiam? Odio ipsam a cum aliquam.</p>
                    </div>
                </Link>
            </div>
            <div className="beer-home">
                <Link to="/RandomBeer">
                    <img src="https://www.marketingtochina.com/wp-content/uploads/2019/11/26-052442-man_goes_on_beer_only_diet_loses_25_pounds.jpg" alt="beers" width="400px"/>
                    <div className="div-text-home">
                        <h2>Random Beer</h2>
                        <br/>
                        <p>Loea repudiandae placeat. Temporibus tenetur consequatur provident non, veritatis repellendus, ratioofficiis aperiam? Odio ipsam a cum aliquam.</p>
                    </div>
                </Link>
            </div>
            <div className="beer-home">
                <Link to="/NewBeer">
                    <img src="https://chasseurdefonds.com/wp-content/uploads/2020/07/bar-%C3%A0-bi%C3%A8res.jpg" alt="beers" width="400px"/>    
                    <div className="div-text-home" >
                        <h2>New Beer</h2>
                        <br/>
                        <p>Lorem ipsum dolor seat. Temporibus tenetur consequatur provident non, veritatis repellendus, ratione distinctio nat aliquam.</p>
                    </div>
                </Link>            
            </div>
        </div>
    )
}

export default Home
