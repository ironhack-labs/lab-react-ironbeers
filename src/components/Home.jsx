import React from 'react'
import {NavLink} from 'react-router-dom'

const Home = () => {
    return (
        <>
            <style>
                {`
                body {
                    background: url(./images/004.jpg) no-repeat bottom center / cover;
                    height: 100vh;
                    position: relative;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                }
                
                body:before {
                    content: '';
                    top:0;
                    left:0;
                    width: 100%;
                    height: 100%;
                    background: rgba(255,255,255, 0.8);
                    position: absolute;
                }
                `}
            </style>
            <div className="row justify-content-between">
                <NavLink to="/beers" className="col-12 col-sm-3 home-link">
                    <h1>All Beers</h1>
                    <p>Lorem ipsum dolor si amet</p>
                </NavLink>
                <NavLink to="/random-beer" className="col-12 col-sm-3 home-link">
                    <h1>Random Beer</h1>
                    <p>Lorem ipsum dolor si amet</p>
                </NavLink>
                <NavLink to="new-beer" className="col-12 col-sm-3 home-link">
                    <h1>New Beer</h1>
                    <p>Lorem ipsum dolor si amet</p>
                </NavLink>
            </div>
        </>
    )
}

export default Home