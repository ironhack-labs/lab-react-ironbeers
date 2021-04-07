import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/HomePage.css';

const HomePage = () => {
    return (
        <div className="HomePage">
            <div className="container">
                <Link 
                    to={`/beers`} 
                    style={{ textDecoration: 'none' }}>
                    <div className="card mt-3 mb-5">
                        <img src="/images/beers.png" className="card-img-top" alt="beers" />
                        <div className="card-body">
                            <h5>All Beers</h5>
                            <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </Link>

                <Link 
                    to={`/random-beer`}
                    style={{ textDecoration: 'none' }}>
                    <div className="card mt-3 mb-3">
                        <img src="/images/random-beer.png" className="card-img-top" alt="random-beer" />
                        <div className="card-body">
                            <h5>Random Beer</h5>
                            <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </Link>

                <Link 
                    to={`/new-beer`}
                    style={{ textDecoration: 'none' }}>
                    <div className="card mt-3 mb-3">
                        <img src="/images/new-beer.png" className="card-img-top" alt="new-beer" />
                        <div className="card-body">
                            <h5>New Beer</h5>
                            <p >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;