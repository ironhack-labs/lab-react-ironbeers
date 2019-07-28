import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return(
        <div className="container">
            <div className="row">
                <div className="col s12 m6 push-m3">
                    <Link to="/beers">
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src="img/beers.png" />
                            </div>
                            <div className="card-content">
                                <h3>All Beers</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente saepe similique laboriosam ut vero beatae error harum tempore earum ducimus minus consequatur eius, laborum porro accusantium esse provident officiis perspiciatis?</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m6 push-m3">
                    <Link to="/random-beer">
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src="img/random-beer.png" />
                            </div>
                            <div className="card-content">
                                <h3>Random Beer</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente saepe similique laboriosam ut vero beatae error harum tempore earum ducimus minus consequatur eius, laborum porro accusantium esse provident officiis perspiciatis?</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m6 push-m3">
                    <Link to="/new-beer">
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src="img/new-beer.png" />
                            </div>
                            <div className="card-content">
                                <h3>New Beer</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente saepe similique laboriosam ut vero beatae error harum tempore earum ducimus minus consequatur eius, laborum porro accusantium esse provident officiis perspiciatis?</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;