import React from "react"
import {Link} from "react-router-dom"

const Home = () => {
        return (
            <div>
                <h1>IronBeers</h1>
                <div>
                    <img src="/images/beers.png" alt=""/>
                    <Link to="/beers">All Beers</Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quibusdam ut nisi reiciendis nesciunt blanditiis facilis laudantium incidunt temporibus? In quo vel repudiandae voluptate dicta illum beatae necessitatibus aut corporis.</p>
                </div>
                <div>
                    <img src="/images/random-beer.png" alt=""/>
                    <Link to="/random">Random Beer</Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quibusdam ut nisi reiciendis nesciunt blanditiis facilis laudantium incidunt temporibus? In quo vel repudiandae voluptate dicta illum beatae necessitatibus aut corporis.</p>
                </div>https://ih-beers-api2.herokuapp.com/beers/random
                <div>
                    <img src="/images/new-beer.png" alt=""/>
                   <Link to="/new">New Beer</Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quibusdam ut nisi reiciendis nesciunt blanditiis facilis laudantium incidunt temporibus? In quo vel repudiandae voluptate dicta illum beatae necessitatibus aut corporis.</p>
                </div>
            </div>
        )
    }


export default Home;