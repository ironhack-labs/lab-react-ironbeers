import React from 'react'

import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <Link to={"/beers"} style={{ textDecoration: 'none' }}>
                <div>
                    <img src="../../logo512.png" alt="logo" />
                    <h1>All Beers</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, aut! Veniam dolores molestias nemo laborum assumenda quae dolore et, ducimus reprehenderit ab. Fuga cum quia sapiente necessitatibus recusandae ipsam rem?</p>
                </div>
            </Link>
            <Link to={'/random-beer'} style={{ textDecoration: 'none' }}>
                <div>
                    <img src="../../logo512.png" alt="logo" />
                    <h1>Random Beers</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, aut! Veniam dolores molestias nemo laborum assumenda quae dolore et, ducimus reprehenderit ab. Fuga cum quia sapiente necessitatibus recusandae ipsam rem?</p>
                </div>
            </Link>
            <Link to={'/new-beer'} style={{ textDecoration: 'none' }}>
                <div>
                    <img src="../../logo512.png" alt="logo" />
                    <h1>New Beer</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, aut! Veniam dolores molestias nemo laborum assumenda quae dolore et, ducimus reprehenderit ab. Fuga cum quia sapiente necessitatibus recusandae ipsam rem?</p>
                </div>
            </Link>
        </div>
    )
}

export default HomePage
