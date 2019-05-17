import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'

class Home extends Component {
    render() {
        return (
            <Fragment>
                <div class="container-fluid">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div className="jumbotron jumboBG1">
                                    <div className="col jumboOverlay text-white text-center">
                                        <h2>
                                            All Beers
                                    </h2>
                                        <p>
                                            Check out all the beers!
                                    </p>
                                        <p>
                                            <Link to="/beers">
                                                <button className="btn btn-secondary btn-large">Let's Go</button>
                                            </Link>


                                        </p>
                                    </div>
                                </div>
                                <div className="jumbotron jumboBG2">
                                    <div className="col jumboOverlay text-white text-center">
                                        <h2>
                                            New Beer
                                    </h2>
                                        <p>
                                            Want to try a new beer?
                                    </p>
                                        <p>
                                            <Link to="/new-beer">
                                                <button className="btn btn-secondary btn-large">Generate</button>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="jumbotron jumboBG3">
                                    <div className="col jumboOverlay text-white text-center">
                                        <h2>
                                            Random Beer
                                    </h2>
                                        <p>
                                            Generate a random beer with the click of a button!
                                    </p>
                                        <p>
                                            <Link to="/random-beer">
                                                <button className="btn btn-secondary btn-large">Generate</button>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Home;
