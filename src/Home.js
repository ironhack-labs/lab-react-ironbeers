import React, {Component} from 'react'
import {Link} from 'react-router-dom'; 


const Home = () => {
    return (
        <div>
            <section className="section">
                <Link to="/beers"> <img src="./../../../allbeers.jpg" style={{width: "100px"}} alt="pic"/> </Link>
                <h2>Show me all beers</h2>
                <p>Candy pie jelly danish wafer. Cotton candy cheesecake cotton candy. Caramels dessert tiramisu. Donut oat cake cookie ice cream sweet roll.</p>
            </section>
            <section className="section">
                <Link to="/random-beer"> <img src="./../../../allbeers.jpg" style={{width: "100px"}} alt="pic"/> </Link>
                <h2>Show me a random beer</h2>
                <p>Candy pie jelly danish wafer. Cotton candy cheesecake cotton candy. Caramels dessert tiramisu. Donut oat cake cookie ice cream sweet roll.</p>
            </section>
            <section className="section">
                <Link to="/new-beer"> <img src="./../../../allbeers.jpg" style={{width: "100px"}} alt="pic"/> </Link>
                <h2>Create a new beer</h2>
                <p>Candy pie jelly danish wafer. Cotton candy cheesecake cotton candy. Caramels dessert tiramisu. Donut oat cake cookie ice cream sweet roll.</p>
            </section>
        </div>
    )
}

export default Home; 