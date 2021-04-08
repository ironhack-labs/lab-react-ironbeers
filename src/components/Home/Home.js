import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Beers from '../../assets/beers.png';
import NewBeers from '../../assets/new-beer.png';
import RandomBeers from '../../assets/random-beer.png';


const Home = () => {

    return (


        <div className="home">
            <Link to="/allBeers" className="card-section">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={Beers} className="card-img-top" alt="..." />
                    <h2>All beers</h2>
                    <div className="card-body">
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur cursus pharetra. In massa nulla, venenatis nec mollis eu, blandit id erat. Nulla ut velit quis leo faucibus commodo. Proin iaculis finibus urna, nec mollis urna ornare nec. Proin id elit dolor. Aliquam tempor nunc nec ultrices varius.</p>
                    </div>
                </div>
            </Link>
            <Link to="/randomBeers" className="card-section">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={NewBeers} className="card-img-top" alt="..." />
                    <h2>Random Beer</h2>
                    <div className="card-body">
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur cursus pharetra. In massa nulla, venenatis nec mollis eu, blandit id erat. Nulla ut velit quis leo faucibus commodo. Proin iaculis finibus urna, nec mollis urna ornare nec. Proin id elit dolor. Aliquam tempor nunc nec ultrices varius.</p>
                    </div>
                </div>
            </Link>
            <Link to="/newBeers" className="card-section">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={RandomBeers} className="card-img-top" alt="..." />
                    <h2>New Beer</h2>
                    <div className="card-body">
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur cursus pharetra. In massa nulla, venenatis nec mollis eu, blandit id erat. Nulla ut velit quis leo faucibus commodo. Proin iaculis finibus urna, nec mollis urna ornare nec. Proin id elit dolor. Aliquam tempor nunc nec ultrices varius.</p>
                    </div>
                </div>
            </Link>
        </div>
    )


}

export default Home;