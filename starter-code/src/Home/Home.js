import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div className="home">
            <div className="stack">
                <Link to="/beers">
                
                <img src="images/beers.png"></img>
                </Link>
                <div className="introText">
                <h1>All Beers</h1>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
                </div>
                </div>
                <div className="stack">
                <Link to="/randomBeer">
                
                <img src="images/random-beer.png"></img>
                </Link>
                <div className="introText">
                <h1>Random Beer</h1>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
                </div>
                </div>
                <div className="stack">
                <Link to="/newBeer">
                
                <img src="images/new-beer.png"></img>
                </Link>
                <div className="introText">
                <h1>New Beer</h1>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
                </div>
                </div>
                
            </div>
        )
    }
}
