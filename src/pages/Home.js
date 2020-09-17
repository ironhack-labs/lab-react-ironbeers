import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"


function Home() {
    return (
        <div>
            <Link to={'/beers'}>
                <div>
                    <img src="" alt=""/>
                    <h1>All Beers</h1>
                    <p>Lorem Ipsum</p>
                </div>
            </Link>
            <Link to={"/random-beer"}>
                <div>
                    <img src="" alt=""/>
                    <h1>Random Beers</h1>
                    <p>Lorem Ipsum</p>
                </div>
            </Link>
            <Link to={'/new-beer'}>
                <div>
                    <img src="" alt=""/>
                    <h1>New Beer</h1>
                    <p>Lorem Ipsum</p>
                </div>
            </Link>
        </div>
    )
}

export default Home
