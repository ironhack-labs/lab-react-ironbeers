import React from "react"
import { Link } from "react-router-dom"
import './App.css'

const Home = () => {
    return (
        <div>
            <h1>Welcome to IronBeers!</h1>
            <div>
                <section>
                    <div>
                        <img src="./images/beer_img1.jpg" alt="bar counter" />
                        <Link to="/beers"><h1>See All Beers</h1></Link>
                        <h2>See a detailed list of all the beers available.</h2>
                    </div>
                </section>
                <section>
                    <div>
                        <img src="./images/beer_img2.jpg" alt="bar counter" />
                        <Link to="/random-beer"><h1>Random Beer</h1></Link>
                        <h2>Navigate to the details of a randomly selected beer.</h2>
                    </div>
                </section>
                <section>
                    <div>
                        <img src="./images/beer_img3.jpg" alt="bar counter" />
                        <Link to="/new-beer"><h1>Add New Beer</h1></Link>
                        <h2>Use our form to add a new beer.</h2>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home