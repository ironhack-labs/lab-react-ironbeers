import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to='/beers'>
                <div className="card mb-5" style={{ width: "18rem;" }}>
                    <img src="https://images.unsplash.com/photo-1572368357616-8e4e95f38fb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" className="card-img-top" alt="..." />
                    <div className='card-title'><h3 className='mt-3 ml-3 text-left'>All Beers</h3></div>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </Link>
            <Link to='/random-beer'>
                <div className="card mb-5" style={{ width: "18rem;" }}>
                    <img src="https://assets.punchdrink.com/wp-content/uploads/2019/12/10140149/Article-Top-10-Beers-2019-Threes-Brewing-Russian-River-Sapwood-Cellars.jpg" className="card-img-top" alt="..." />
                    <div className='card-title'><h3 className='mt-3 ml-3 text-left'>Random Beer</h3></div>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </Link>
            <Link to='/new-beer'>
                <div className="card mb-5" style={{ width: "18rem;" }}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkMEnmjxBTg8bL8uBmrLKKh2_X00R0ATlHnA&usqp=CAU" className="card-img-top" alt="..." />
                    <div className='card-title'><h3 className='mt-3 ml-3 text-left'>New Beer</h3></div>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </Link>
        </div>


    );
};

export default Home;