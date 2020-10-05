import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

function Home () {
    return (
        <>
            <div className="all-containers">
                <div>
                    <img src="./images/beers.png " alt="beers" />
                </div>
                <div className="description">
                    <Link className="link-single" to='/beers'>All Beers</Link>
                        <p>
                        Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Viavamus 
                        pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam 
                        dictum arcu ut dignissim varius.
                        </p>
                </div>
                <div>
                    <img src="./images/random-beer.png " alt="random-beer" />
                </div>
                <div className="description">
                    <Link className="link-single" to='/random-beer'>Random Beer</Link>
                        <p>
                        Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Viavamus 
                        pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam 
                        dictum arcu ut dignissim varius.
                        </p>
                </div>
                <div>
                    <img src="./images/new-beer.png " alt="new-beer" />
                </div>
                <div className="description">
                    <Link className="link-single" to='/new-beer'>New Beer</Link>
                        <p>
                        Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Viavamus 
                        pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam 
                        dictum arcu ut dignissim varius.
                        </p>
                </div>
            </div>
        </>
    )
}


export default Home