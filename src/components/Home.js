import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


class Home extends React.Component {
    render() {
       
        return (
            <div className="App">
                <div>
                <div>
                    <img src="../assets/beers.png" alt="beers" />
                    <h2>
                        <Link to="/beers">
                            All Beers
                        </Link>
                    </h2>
                    </div>
                    <div>
                    <img src="../assets/random-beer.png" />
<h2>
    <Link to="/random-beer">
        Random Beer
    </Link>
</h2>
</div>
<div>
<img src="../assets/new-beer.png" />
<h2>
<Link to="/new-beer">
        New Beer
    </Link>
    </h2>
</div>
                </div>
            </div>
        )
    }
}

export default Home;