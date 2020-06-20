import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'

export default function Home() {

    return (
        <div className='home-container'>
            <Link to='/beers'>
                <div class="card card-div" style={{width: '18rem'}}>
                    <img src='https://bigseventravel.com/wp-content/uploads/2019/06/Screenshot-2019-06-04-at-20.31.31.png' class="card-img-top" alt="beer-img" />
                    <div class="card-body">
                        <h5 class="card-title">All Beers</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </Link>
            <Link to='/random-beer'>
                <div class="card card-div" style={{width: '18rem'}}>
                    <img src='https://img.theculturetrip.com/768x432/wp-content/uploads/2017/11/alcoholic-beverages-1845295_1280.jpg' class="card-img-top" alt="beer-img" />
                    <div class="card-body">
                        <h5 class="card-title">Random Beer</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </Link>
            <Link to='/new-beer'>
                <div class="card card-div" style={{width: '18rem'}}>
                    <img src='https://www.hotelhydepark.org/wp-content/uploads/2013/03/bars.jpg' class="card-img-top" alt="beer-img" />
                    <div class="card-body">
                        <h5 class="card-title">New Beer</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}