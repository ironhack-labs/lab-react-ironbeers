import React from 'react';
import { Link } from 'react-router-dom';

const Home = ()=> {

        return(

            <div className="card-deck">
                <div className="card">
                    <img className="card-img-top imagen" src={'/images/allBeers.jpeg'} alt="All beers" />
                    <div className="card-body">
                        <Link to='/beers'><h3 className="card-title">All Beers</h3></Link>
                        <p className="card-text text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam voluptates quis placeat totam dolore perferendis cumque repellendus molestiae! Consequatur officia sunt in quisquam adipisci?</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top imagen" src={'/images/randomBeer.jpeg'} alt="Random Beer" />
                    <div className="card-body">
                        <Link to='/random-beer'><h3 className="card-title">Get a Random Beer</h3></Link>
                        <p className="card-text text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam voluptates quis placeat totam dolore perferendis cumque repellendus molestiae! Consequatur officia sunt in quisquam adipisci?</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top imagen" src={'/images/beer.jpg'} alt="Beer" />
                    <div className="card-body">
                        <Link to='/new-beer'><h3 className="card-title">Create a New Beer</h3></Link>
                        <p className="card-text text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam voluptates quis placeat totam dolore perferendis cumque repellendus molestiae! Consequatur officia sunt in quisquam adipisci?</p>
                    </div>
                </div>
            </div>

        )

}

export default Home;