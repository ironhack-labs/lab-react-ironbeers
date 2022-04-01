import React from 'react';
import "./Home.css"
import beersPic from '../../assets/beers.png'
import beerRandomPic from '../../assets/random-beer.png'
import newBeerPic from '../../assets/new-beer.png'
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='col mb-3 mt-4'>
            {/* CARD-1 */}
            <div className="mb-3">
                {/* LINK */}
                <Link to="/beers">
                    <img src={beersPic} className="card-image rounded" alt="..." />
                </Link>
                <div className="card-body">
                    <h1 className="card-title text-start fs-1">All Beers</h1>
                    <p className="card-text text-start">Nunc malesuada dui quis ex pulvinar elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ultricies risus elit, sed convallis arcu placerat a. Sed sit amet nunc augue. Curabitur at sapien mollis, lobortis libero vitae, laoreet sapien. Nulla lacus neque, laoreet vel pellentesque et, semper sed sapien. Nam maximus pharetra ante, id lacinia ligula. Vivamus vulputate purus at nisi accumsan volutpat. Vestibulum sed sem sapien. Suspendisse fringilla, massa sed vestibulum eleifend, eros turpis porttitor lectus, vitae ornare purus tortor sollicitudin velit.</p>
                </div>
            </div>

            {/* CARD-2 */}
            <div className="mb-3">
                {/* LINK */}
                <Link to="/beers/random-beer">
                    <img src={beerRandomPic} className="card-image rounded" alt="..." />
                </Link>
                <div className="card-body">
                    {/* LINK */}
                    <h1 className="card-title text-start fs-1">Random Beer</h1>
                    <p className="card-text text-start">Nunc malesuada dui quis ex pulvinar elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ultricies risus elit, sed convallis arcu placerat a. Sed sit amet nunc augue. Curabitur at sapien mollis, lobortis libero vitae, laoreet sapien. Nulla lacus neque, laoreet vel pellentesque et, semper sed sapien. Nam maximus pharetra ante, id lacinia ligula. Vivamus vulputate purus at nisi accumsan volutpat. Vestibulum sed sem sapien. Suspendisse fringilla, massa sed vestibulum eleifend, eros turpis porttitor lectus, vitae ornare purus tortor sollicitudin velit.</p>
                </div>
            </div>
            {/* CARD-3 */}
            <div className="mb-3">
                {/* LINK */}
                <img src={newBeerPic} className="card-image rounded" alt="..." />
                <div className="card-body">
                    {/* LINK */}
                    <h1 className="card-title text-start fs-1">New Beer</h1>
                    <p className="card-text text-start">Nunc malesuada dui quis ex pulvinar elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ultricies risus elit, sed convallis arcu placerat a. Sed sit amet nunc augue. Curabitur at sapien mollis, lobortis libero vitae, laoreet sapien. Nulla lacus neque, laoreet vel pellentesque et, semper sed sapien. Nam maximus pharetra ante, id lacinia ligula. Vivamus vulputate purus at nisi accumsan volutpat. Vestibulum sed sem sapien. Suspendisse fringilla, massa sed vestibulum eleifend, eros turpis porttitor lectus, vitae ornare purus tortor sollicitudin velit.</p>
                </div>
            </div>
        </div>

    );
};

export default Home;