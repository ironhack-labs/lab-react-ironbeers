import React from "react";
import { Link } from "react-router-dom";
import './Home.css'


class Home extends React.Component {

    render() {
        return (
            <div className="home">
                <div>
                    <img src="../images/beers.png"></img>
                    <div clasName="homediv">
                        <Link to={"/Beers"}><h1>All Beers</h1></Link>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, vero architecto. Dignissimos, accusamus adipisci corrupti eum perspiciatis tempore, at aspernatur impedit maxime, aliquam molestiae ab dolores quae rerum unde eligendi.</p>
                    </div>
                </div>
                <div clasName="homediv">
                    <img src="../images/new-beer.png"></img>
                    <div>
                        <Link to={"/RandomBeers"}><h1>Random Beer</h1></Link>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, vero architecto. Dignissimos, accusamus adipisci corrupti eum perspiciatis tempore, at aspernatur impedit maxime, aliquam molestiae ab dolores quae rerum unde eligendi.</p>
                    </div>
                </div>
                <div clasName="homediv">
                    <img src="../images/random-beer.png"></img>
                    <div>
                        <Link to={"/"}><h1>New Beer</h1></Link>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, vero architecto. Dignissimos, accusamus adipisci corrupti eum perspiciatis tempore, at aspernatur impedit maxime, aliquam molestiae ab dolores quae rerum unde eligendi.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;