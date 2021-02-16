import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div>
            <div className='tile' id='all-beers'>
                <Link to="/allbeers">
                    <h1>All Beers</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Link>
            </div>
            <div className='tile' id='random-beer'>
                <Link to="/random">
                    <h1>Random Beer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Link>
            </div>
            <div className='tile' id='new-beer'>
                <Link to="/new">
                    <h1>New Beer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Link>
            </div>

        </div>
    );
}

export default Home;