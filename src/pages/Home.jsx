import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Home.css";

const Home = () => {
    return (
        <div className="container">
            <div className="columns">
                <div className="column">
                    <article>
                        <img src={'images/all-beers.jpg'}
                            alt=""/>
                        <div className="article-content">
                            <Link to="/beers">
                                <h2 className="article-title">All Beers</h2>
                            </Link>
                            <p className="aticle-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo porro autem eaque fuga facere, nisi quibusdam libero sapiente officiis ipsam tempore ad fugit cupiditate aliquid provident eligendi quos ex cumque.</p>
                        </div>
                    </article>
                </div>

                <div className="column">
                    <article>
                        <img src={'images/random-beer.jpg'}
                            alt=""/>
                        <div className="article-content">
                            <Link to="random-beer">
                                <h2 className="article-title">Random Beer</h2>
                            </Link>
                            <p className="aticle-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo porro autem eaque fuga facere, nisi quibusdam libero sapiente officiis ipsam tempore ad fugit cupiditate aliquid provident eligendi quos ex cumque.</p>
                        </div>
                    </article>
                </div>
                <div className="column">
                    <article>
                        <img src={'images/new-beer.jpg'}
                            alt=""/>
                        <div className="article-content">
                            <Link to="new-beer">
                                <h2 className="article-title">New Beer</h2>
                            </Link>
                            <p className="aticle-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo porro autem eaque fuga facere, nisi quibusdam libero sapiente officiis ipsam tempore ad fugit cupiditate aliquid provident eligendi quos ex cumque.</p>
                        </div>
                    </article>
                </div>
            </div>
        </div>

    )
}

export default Home
