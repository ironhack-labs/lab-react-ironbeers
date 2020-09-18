import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"


function Home() {
    return (
        <div>
            <Link to={'/beers'}>
                <div>
                    <img className='homeImage' src="https://via.placeholder.com/700x200" alt=""/>
                    <h1>All Beers</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </Link>
            <Link to={"/random-beer"}>
                <div>
                    <img className='homeImage' src="https://via.placeholder.com/700x200" alt=""/>
                    <h1>Random Beers</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </Link>
            <Link to={'/new-beer'}>
                <div>
                    <img className='homeImage' src="https://via.placeholder.com/700x200" alt=""/>
                    <h1>New Beer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </Link>
        </div>
    )
}

export default Home
