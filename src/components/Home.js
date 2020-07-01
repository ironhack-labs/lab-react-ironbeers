import React from 'react';
import {NavLink} from 'react-router-dom';

function Home(props){
    return(
        <div>
            <div className="card">
                <NavLink activeClassName="selected" exact to="/beers">
                    <img className="card-img-top" src={process.env.PUBLIC_URL + '/images/beers.png'} alt="beers" />
                    <div className="card-body">
                    <h3>All Beers</h3>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </NavLink>
                </div>

                <div className="card">
                <NavLink activeClassName="selected" exact to="/random-beer">
                    <img className="card-img-top" src={process.env.PUBLIC_URL + '/images/random-beer.png'} alt="beers" />
                    <div className="card-body">
                    <h3>Random Beer</h3>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </NavLink>
                </div>

                <div className="card">
                <NavLink activeClassName="selected" exact to="/new-beer">
                    <img className="card-img-top" src={process.env.PUBLIC_URL + '/images/new-beer.png'} alt="beers" />
                    <div className="card-body">
                    <h3>New Beer</h3>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </NavLink>
                </div>
        </div>
    )
}
export default Home;