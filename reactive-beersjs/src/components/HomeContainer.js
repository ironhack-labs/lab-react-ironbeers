import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../img/beers.png'
import img2 from '../img/new-beer.png'
import img3 from '../img/random-beer.png'
const HomeContainer = () => {
  return (
    <div className="home-container">
      <Link to="/beers">
        <div className="home-box-container">
          <div>
            <img src={img1} alt="text"/>
          </div>
          <div>
            <h2>All Beers</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius.</p>
          </div>
        </div>
      </Link>
      <Link to="/random-beer">
        <div className="home-box-container">
          <div>
            <img src={img2} alt="text"/>
          </div>
          <div>
            <h2>Random Beer</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius.</p>
          </div>
        </div>
      </Link>
      <Link to="/new-beer">
        <div className="home-box-container">
          <div>
            <img src={img3} alt="text"/>
          </div>
          <div>
            <h2>New Beer</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius.</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default HomeContainer
