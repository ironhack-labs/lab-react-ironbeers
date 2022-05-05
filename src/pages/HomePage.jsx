// import { useState } from 'react'
// import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomePage = ({ title, director, IMDBRating }) => {

    return (
        <div className="HomePage">
            homePage
            <img src={"./../beers.png"} />
            <Link to="/beers">All beers</Link>
            <img src={"./../random-beer.png"} />
            <Link to="/random-beer">random beer</Link>
            <img src={"./../beers.png"} />
            <Link to="/new-beer">new beer</Link>
        </div>
    );
}

export default HomePage;