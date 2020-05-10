import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1 className="home-title">Welcome to IronBeers</h1>
            <div className="home-container">
                <Link to={"/beers"}> 
                <img src='/images/beers.png' alt="" />
                <div className="padding">
                <h1>All Beers</h1>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia molestie vestibulum. 
                Maecenas ultricies leo eu eros auctor, ut aliquet mi pretium. Nulla accumsan dictum aliquam. 
                Nullam quis mauris vel quam hendrerit tincidunt. Donec imperdiet diam vitae tellus sodales malesuada. 
                Integer sit amet ex et justo tristique dapibus.</p>
                </div>
                </Link>
            </div>

            <div className="home-container">
                <Link to={"/random"}> 
                <img src='/images/random-beer.png' alt="" />
                <div className="padding">
                <h1>Random Beer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia molestie vestibulum. 
                Maecenas ultricies leo eu eros auctor, ut aliquet mi pretium. Nulla accumsan dictum aliquam. 
                Nullam quis mauris vel quam hendrerit tincidunt. Donec imperdiet diam vitae tellus sodales malesuada. 
                Integer sit amet ex et justo tristique dapibus.</p>
                </div>
                </Link>
            </div>

            <div className="home-container">
                <Link to={"/new"}> 
                <img src='/images/new-beer.png' alt="" />
                <div className="padding">
                <h1>Add New Beer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia molestie vestibulum. 
                Maecenas ultricies leo eu eros auctor, ut aliquet mi pretium. Nulla accumsan dictum aliquam. 
                Nullam quis mauris vel quam hendrerit tincidunt. Donec imperdiet diam vitae tellus sodales malesuada. 
                Integer sit amet ex et justo tristique dapibus.</p>
                </div>
                </Link>
            </div>
            
           
        </div>
    )
}

export default Home
