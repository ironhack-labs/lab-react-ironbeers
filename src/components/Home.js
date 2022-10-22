import { NavLink } from "react-router-dom";
import BeersImage from "../assets/beers.png"
import RandomBeerImage from "../assets/random-beer.png"
import NewBeerImage from "../assets/new-beer.png"

export default function Home() {
    return (
        <div className="Home">

            <div className="homeOption">
                <img src={BeersImage} alt="beers" className="homepageImage" />
                <div className="homeOptionText">
                    <NavLink to="/beers" className="homepageLink"><h2>All Beers</h2></NavLink>
                    <p className="homepageText">Click on the link to see a list of all the beers in our online brewery!</p>
                </div>
            </div>
            <div className="homeOption">
                <img src={RandomBeerImage} alt="randombeers" className="homepageImage" />
                <div className="homeOptionText">
                    <NavLink to="/random-beer" className="homepageLink"><h2>Random Beer</h2></NavLink>
                    <p className="homepageText"> Or click this link so that we can pick out a random beer for you.</p>
                </div>
            </div>

            <div className="homeOption">
                <img src={NewBeerImage} alt="newbeers" className="homepageImage" />
                <div className="homeOptionText">
                    <NavLink to="/new-beer" className="homepageLink"><h2>Create a New Beer</h2></NavLink>
                    <p className="homepageText">If you have a favourite beer that you'd like to add to our catalogue, click here and fill out the form.</p>
                </div>
            </div>
        </div>
    )

}