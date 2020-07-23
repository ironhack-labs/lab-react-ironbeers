import React from 'react';
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <React.Fragment>
            <div className="container-link-home">
                <Link to={"/allBeers"} className="link">All Beers</Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, laudantium tempore molestias perspiciatis dolores maiores consequuntur ut est quod voluptas doloremque nisi enim adipisci ea consectetur culpa, minus sunt temporibus.</p>
            </div>

            <div className="container-link-home">
                <Link to={"/randomBeer"} className="link">Random Beer</Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, laudantium tempore molestias perspiciatis dolores maiores consequuntur ut est quod voluptas doloremque nisi enim adipisci ea consectetur culpa, minus sunt temporibus.</p>
            </div>

            <div className="container-link-home">
                <Link to={"/newBeer"} className="link">New Beer</Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, laudantium tempore molestias perspiciatis dolores maiores consequuntur ut est quod voluptas doloremque nisi enim adipisci ea consectetur culpa, minus sunt temporibus.</p>
            </div>

        </React.Fragment>

    )
}

export default Home
