import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Hompage.css'


class Homepage extends React.Component {

    render() {
        return (
            <div className="homepage">
                <div>
                    <img src="../images/beers.png"></img>
                    <div clasName="homediv">
                        <h1>All Beers</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, vero architecto. Dignissimos, accusamus adipisci corrupti eum perspiciatis tempore, at aspernatur impedit maxime, aliquam molestiae ab dolores quae rerum unde eligendi.</p>
                    </div>
                </div>
                <div clasName="homediv">
                    <img src="../images/new-beer.png"></img>
                    <div>
                        <h1>Random Beer</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, vero architecto. Dignissimos, accusamus adipisci corrupti eum perspiciatis tempore, at aspernatur impedit maxime, aliquam molestiae ab dolores quae rerum unde eligendi.</p>
                    </div>
                </div>
                <div clasName="homediv">
                    <img src="../images/random-beer.png"></img>
                    <div>
                        <h1>New Beer</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, vero architecto. Dignissimos, accusamus adipisci corrupti eum perspiciatis tempore, at aspernatur impedit maxime, aliquam molestiae ab dolores quae rerum unde eligendi.</p>
                    </div>
                </div>
            </div>
        );
    }
}



export default Homepage;
