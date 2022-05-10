import React from "react"
import { Link } from "react-router-dom";
import beersImage from '../assets/beers.png';
import randomBeerImage from '../assets/random-beer.png'
import newBeerImage from '../assets/new-beer.png'

export const HomePage = () => {

    return (
        <>
            <div className="container d-flex flex-column">
                <img src={beersImage} alt="all-beers" />
                <Link className="beers" to="/beers" style={{ textDecoration: "none", color: "black", margin: "50px" }}>
                    <h1>All Beers</h1>
                    <p className="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac sapien leo. In non metus fringilla,
                        dapibus est ac, ornare est. Ut sagittis fermentum sem vel tristique. Nullam vitae elementum neque.
                        Aliquam lobortis, velit sed ornare posuere, augue massa tempor magna, id scelerisque massa magna sit amet
                        lorem. Proin finibus est nec orci porta iaculis non in dolor. Nulla a ultrices velit, sit amet dapibus
                        felis. Sed viverra, ante dapibus sollicitudin finibus, neque neque hendrerit justo, ac sodales quam
                        ligula sit amet quam. Curabitur interdum ligula sit amet quam ullamcorper, a tempor justo tempus.
                        Nulla laoreet, purus vel efficitur fermentum, tortor mi feugiat neque, mollis placerat dui quam ut tortor.
                    </p>
                </Link>
                <img src={randomBeerImage} alt="random-beers" />
                <Link className="random-beer" to="/random-beer">Random Beer</Link>
                <img src={newBeerImage} alt="new-beers" />
                <Link className="new-beer" to="/new-beer">New Beer</Link>
            </div>
        </>)
}