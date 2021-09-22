// import { NavLink } from "react-router-dom";
import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
    return (
        // <nav>
        <div className="HomePage">
            <section className='HomePage__sectionOne'>
                <Link style={{ textDecoration: 'none' }} to={'/beers'}>
                    <img
                        className='HomePage__sectionOne__img'
                        src=""
                        alt="Beers"
                    />
                    <div className='HomePage__sectionOne__info'>
                        <h1>All Beers</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget libero enim.
                            Cras in odio enim. In purus risus, convallis sit amet mattis eu, posuere quis libero.
                        </p>
                    </div>
                </Link>
            </section>
            <section className='HomePage__sectionTwo'>
                <Link style={{ textDecoration: 'none' }} to={'/random-beer'}>
                    <img
                        className='HomePage__sectionTwo__img'
                        src=""
                        alt="Beers"
                    />
                    <div className='HomePage__sectionTwo__info'>
                        <h1>Random Beer</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget libero enim.
                            Cras in odio enim. In purus risus, convallis sit amet mattis eu, posuere quis libero.
                        </p>
                    </div>
                </Link>
            </section>
            <section className='HomePage__sectionThree'>
                <Link style={{ textDecoration: 'none' }} to={'/new-beer'}>
                    <img
                        className='HomePage__sectionThree__img'
                        src=""
                        alt="Beers"
                    />
                    <div className='HomePage__sectionThree__info'>
                        <h1>New Beer</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget libero enim.
                            Cras in odio enim. In purus risus, convallis sit amet mattis eu, posuere quis libero.
                        </p>
                    </div>
                </Link>
            </section>
        </div>
                    // </nav>

                    );
}