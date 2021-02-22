import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div>
            <div>
                <Link to="/beers">
                    <img src="../beers.png" alt="allbeers"/>
                </Link>
                    <h3>All Beers</h3>
                    <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            <div>
                <Link to="/random">
                    <img src="../assets/random-beer.png" alt="random-beer"/>
                </Link>
                    <h3>Random Beer</h3>
                    <p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div>
                <Link to="/new-beer">
                    <img src="./images/new-beer.png" alt="new-beer"/>
                </Link>
                    <h3>New beer</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
            </div>
        </div>
    )
}
export default Home;