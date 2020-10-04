import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="home-container">
        
        <Link to="/beers">
            <div className="card" style={{width: '90vw', margin: 'auto'}}>
                <img className="card-img-top" src="/images/all-beers.png" alt="beer" styles={{height: '50px'}}/>
                <div className="card-body">
                    <h3 className="card-title text-left">All Beers</h3>
                    <p className="card-text text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </Link>
        
        <Link to="/random-beer">
            <div className="card" style={{width: '90vw', margin: 'auto'}}>
                <img className="card-img-top" src="/images/random-beer.png" alt="beer" styles={{height: '50px'}}/>
                <div className="card-body">
                    <h3 className="card-title text-left">Random Beer</h3>
                    <p className="card-text text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </Link>

        <Link to="/new-beer">
            <div className="card" style={{width: '90vw', margin: 'auto'}}>
                <img className="card-img-top" src="/images/new-beer.png" alt="beer" styles={{height: '50px'}}/>
                <div className="card-body">
                    <h3 className="card-title text-left">New Beer</h3>
                    <p className="card-text text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </Link>

    </div>
)

export default Home;