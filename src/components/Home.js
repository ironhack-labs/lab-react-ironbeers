import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <h1 className="uk-margin-small-bottom">Iron Beers</h1>

            <div className="uk-width-1-1 uk-align-center uk-margin-small-top" uk-grid="true">
                <div className="uk-grid-item-match">

                    <div className="uk-card uk-card-default uk-card-body uk-text-left">
                        <img className="uk-width-1-1" src="images/beers.png" alt="All Beers" />
                        <h2><Link to="/beers" className="uk-text-emphasis">All Beers</Link></h2>
                        <p>
                            Phasellus eu massa facilisis, sodales ex sit amet, aliquet nisi. Nulla metus nisi, congue eu neque a, laoreet hendrerit nibh. Fusce dignissim interdum dictum. Aliquam tincidunt, lacus a egestas faucibus, ligula est porta dolor, vel pharetra orci nunc at sem. Maecenas neque augue, consequat id velit eget, dictum rutrum urna.
                        </p>
                    </div>

                    <div className="uk-card uk-card-default uk-card-body uk-text-left">
                        <img className="uk-width-1-1" src="images/random-beer.png" alt="Random Beer" />
                        <h2><Link to="/random-beer" className="uk-text-emphasis">Random Beer</Link></h2>
                        <p>
                            Donec rutrum dui ac tempor lobortis. Integer sodales tellus quis purus euismod commodo. Nunc et magna nec urna viverra placerat eu eu arcu. Vestibulum et mauris sed dolor lobortis consectetur. Nulla ut nibh vitae nunc commodo consequat. Curabitur dapibus accumsan ullamcorper. Fusce a tristique augue.
                        </p>
                    </div>

                    <div className="uk-card uk-card-default uk-card-body uk-text-left">
                        <img className="uk-width-1-1" src="images/new-beer.png" alt="New Beer" />
                        <h2><Link to="/new-beer" className="uk-text-emphasis">New Beer</Link></h2>
                        <p>
                            Cras eget dictum dolor, id vestibulum velit. Pellentesque non nunc vitae libero consequat accumsan eu ut libero. Etiam lobortis leo eu molestie finibus. Pellentesque urna sem, egestas sit amet ante ac, congue mollis eros. In laoreet ultrices est, id vehicula dolor ornare non. Mauris vehicula ligula ut facilisis molestie.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;
