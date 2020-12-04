import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <div className="link-card">
            <Link to="/beers">
                <img src="../../all-beers-img.png" alt=""/>
            </Link>
                <div className="description">
                    <h1 className="home-title" >All Beers</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, error debitis esse dolore ad nisi quasi itaque quam, odit asperiores illo! Sint vel illum similique quo molestiae optio temporibus veritatis.</p>
                </div>
            </div>
            <div className="link-card">
            <Link to="/random-beer">
                <img src="../../random-beer-img.png" alt=""/>
            </Link>
                <div className="description">
                    <h1 className="home-title" >Random Beer</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, error debitis esse dolore ad nisi quasi itaque quam, odit asperiores illo! Sint vel illum similique quo molestiae optio temporibus veritatis.</p>
                </div>
            </div>
            <div className="link-card">
            <Link to="/new-beer">
                <img src="../../new-beer-img.png" alt=""/>
            </Link>
                <div className="description">
                    <h1 className="home-title" >New Beer</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, error debitis esse dolore ad nisi quasi itaque quam, odit asperiores illo! Sint vel illum similique quo molestiae optio temporibus veritatis.</p>
                </div>
            </div>
        </div>
    )
}
