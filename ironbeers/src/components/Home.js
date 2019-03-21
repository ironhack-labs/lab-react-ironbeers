import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <section>
            <article className="menu-item">
                <Link className="home-link" to="/beers">
                    <img src="https://fotostrasse.com/wp-content/uploads/2019/02/Lager-Lager_Our-Favorite-Craft-Beer-Bar-in-Kreuzkolln_02.jpg" alt="All beers"></img>
                    <h2>All Beers</h2>
                </Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </article>

            <article className="menu-item">
                <Link className="home-link" to="/random">
                    <img src="https://assets3.thrillist.com/v1/image/1680956/size/tmg-article_default_mobile.jpg" alt="Random beers"></img>
                    <h2>Random Beer</h2>
                </Link>
                    <p>Lorem ipsum dolor sit amet, consectetur asdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </article>
            <article className="menu-item">
                <Link className="home-link" to="/add">
                    <img src="https://www.beyondbeer.de/media/image/30/b3/a0/paket_geschenkpaket_einsteiger_600x600.jpg" alt="New beers"></img>
                    <h2>New Beer</h2>
                </Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </article>
            <article className="menu-item">
                <Link className="home-link" to="/search">
                    <img src="https://fotostrasse.com/wp-content/uploads/2019/02/Lager-Lager_Our-Favorite-Craft-Beer-Bar-in-Kreuzkolln_02.jpg" alt="Search beers"></img>
                    <h2>Search Beer</h2>
                </Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </article>
        </section>
    )
  }
}

export default Home