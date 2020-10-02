import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = (props) => {
    return (
        <div className="Home">
            <Link to="/beers" className="noStyle">
                <div>
                    <img src="https://images.unsplash.com/photo-1575444758702-4a6b9222336e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="bar" className="homeImage"/>
                    <h3>All Beers</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </Link>
            <Link to="/random-beer" className="noStyle">
                <div>
                    <img src="https://images.unsplash.com/photo-1507310951869-fe0941df4dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="beers" className="homeImage"/>
                    <h3>Random Beers</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </Link>
            <Link to="/new-beer" className="noStyle">
                <div>
                    <img src="https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" alt="beer" className="homeImage"/>
                    <h3>New Beer</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </Link>
        </div>
    );
};

export default Home;