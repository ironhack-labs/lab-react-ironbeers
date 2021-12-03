import React from 'react';
import {Link} from "react-router-dom";

export const Home = () => {
    return (
        <>

            <div className="home">
                    <Link to="/beers"><i className="fa fa-beer" aria-hidden="true"></i> Beers</Link>
                    <Link to="/random-beer"><i className="fa fa-random" aria-hidden="true"></i> Random Beer</Link>
                    <Link to="/new-beer"><i className="fa fa-plus" aria-hidden="true"></i> New Beer</Link>
            </div>
        </>
    );
}