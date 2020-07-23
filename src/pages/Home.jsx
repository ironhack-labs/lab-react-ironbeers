import React from 'react';
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <React.Fragment>
            <div className="container-link-home">
                <img style={{width:"600px"}}src="bar-beer.jpg" alt="" />
                <br/>
                <Link to={"/allBeers"} className="link">All Beers</Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, laudantium tempore molestias perspiciatis dolores maiores consequuntur ut est quod voluptas doloremque nisi enim adipisci ea consectetur culpa, minus sunt temporibus.</p>
            </div>

            <div className="container-link-home">
                <img style={{width:"600px"}} src="beers.jpg" alt="" />
                <br/>
                <Link to={"/randomBeer"} className="link">Random Beer</Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, laudantium tempore molestias perspiciatis dolores maiores consequuntur ut est quod voluptas doloremque nisi enim adipisci ea consectetur culpa, minus sunt temporibus.</p>
            </div>

            <div className="container-link-home">
                <img style={{width:"600px"}} src="one-beer.jpg" alt="" />
                <br/>
                <Link to={"/newBeer"} className="link">New Beer</Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, laudantium tempore molestias perspiciatis dolores maiores consequuntur ut est quod voluptas doloremque nisi enim adipisci ea consectetur culpa, minus sunt temporibus.</p>
            </div>

        </React.Fragment>

    )
}

export default Home
