import React from 'react'
import {NavLink} from 'react-router-dom'

const Home = () => {
    return (
        <>
            <NavLink to="/beers" className="col-12 col-sm-4">
                <div className="home-img" style={{background: `url(./images/004.jpg) no-repeat center center / cover`}}></div>
                <h1>All Beers</h1>
                <p>Lorem ipsum dolor si amet</p>
            </NavLink>
            <NavLink to="/random-beer" className="col-12 col-sm-4">
                <div className="home-img" style={{background: `url(./images/001.jpg) no-repeat center center / cover`}}></div>
                <h1>Random Beer</h1>
                <p>Lorem ipsum dolor si amet</p>
            </NavLink>
            <NavLink to="new-beer" className="col-12 col-sm-4">
                <div className="home-img" style={{background: `url(./images/003.jpg) no-repeat center center / cover`}}></div>
                <h1>New Beer</h1>
                <p>Lorem ipsum dolor si amet</p>
            </NavLink>
        </>
    )
}

export default Home