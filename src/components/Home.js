import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='container my-5 py-5'>
            <div className="card">
                <img src={'/allbeers.jpg'} alt="All Beers" className="card-img-top" />
                <div className="card-body">
                    <Link to='/beers'><h2 className="card-title">All Beers</h2></Link>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptate porro fugit dolorum dignissimos magni corrupti iste impedit vitae officiis.</p>
                </div>
            </div>
            <div className="card my-4">
                <img src={'/random.jpg'} alt="Random Beer" className="card-img-top " />
                <div className="card-body">
                    <Link to='/random-beer'><h2 className="card-title">Random Beer</h2></Link>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptate porro fugit dolorum dignissimos magni corrupti iste impedit vitae officiis.</p>
                </div>
            </div>
            <div className="card">
                <img src={'/newbeer.jpg'} alt="New Beer" className="card-img-top" />
                <div className="card-body">
                    <Link to='/new-beer'><h2 className="card-title">New Beer</h2></Link>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptate porro fugit dolorum dignissimos magni corrupti iste impedit vitae officiis.</p>
                </div>
            </div>

        </div>
    )
}
export default Home;

