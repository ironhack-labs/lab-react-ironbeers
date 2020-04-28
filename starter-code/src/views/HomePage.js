import React from 'react'
import { Link } from "react-router-dom";

class HomePage extends React.Component {
    render(){
        return(
            <div className="container-homepage"> 
                <div className="link-beerlist">
                    <img src="./images/beers.png"></img>
                    <Link className="link-homepage" to={"/beers"}>All Beers</Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut porttitor ante.</p>
                </div>
                <div className="link-randombeer">
                    <img src="./images/random-beer.png"></img>
                    <Link className="link-homepage" to="/random-beer">Random Beers</Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut porttitor ante.</p>
                </div>
                <div className="link-newbeer">
                    <img src="./images/new-beer.png"></img>
                    <Link className="link-homepage" to="/new-beer">New Beers</Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut porttitor ante. </p>

                </div>

            </div>
        )
    }
}

export default HomePage;