import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../styles/home.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to={`/all/`}>
                        <div className="img-container">
                            <img className="App-img" alt="beers" src={"../images/all.jpg"} />
                        </div>
                        {<h3>All Beers</h3>}


                        <p>Lorem</p>
                    </Link>
                </div>

                <div>
                    <Link to={`/random/`}>
                        <div className="img-container">
                            <img className="App-img" alt="beers" src={"../images/allbeers2.jpg"} />
                        </div>
                        {<h3>Random Beers</h3>}
                        <p>Lorem</p>
                    </Link>
                </div>

                <div>
                    <Link to={`/new/`}>

                        <div className="img-container">
                            <img className="App-img" alt="beers" src={"../images/allbeers.jpg"} />
                        </div>

                        {<h3>Add Beer</h3>}
                        <p>Lorem</p>
                    </Link>

                </div>


            </div >

        )
    }
}
