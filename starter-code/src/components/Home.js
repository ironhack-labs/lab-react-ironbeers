import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="Home">
      <div className="AllBeers fit">
        <Link to="/beers" className="beers">
          <img alt='' src='/images/beers.png' className="w"></img>
          <div className="w data">
            <h1>All beers</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in ante facilisis, ullamcorper tellus non, volutpat orci. Praesent scelerisque erat sed diam rutrum, nec efficitur dolor eleifend. Integer cursus finibus dolor vel varius. Duis in tincidunt sem. Nunc urna ante, maximus imperdiet consectetur a, tristique et urna. Pellentesque varius enim.</p>
          </div>
        </Link>
      </div>
      <div className="RandomBeer fit">
        <Link to="/random-beer" className="beers">
          <img alt='' src='/images/random-beer.png' className="w"></img>
          <div className="w data">
            <h1>Random beer</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non nunc vitae velit tristique dignissim eu non ligula. Donec consequat urna in neque pretium, quis commodo diam auctor. Donec cursus eros diam, eget accumsan arcu ultricies ac. Curabitur sed est volutpat, congue eros vitae, vulputate metus. Sed varius, tortor sit.</p>
          </div>
        </Link>
      </div>
      <div className="NewBeer fit">
        <Link to="/new-beer" className="beers">
          <img alt='' src='/images/new-beer.png' className="w"></img>
          <div className="w data">
            <h1>New beer</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et dapibus turpis, ut ultricies elit. Fusce euismod bibendum leo, non sollicitudin enim condimentum sed. Aliquam et molestie justo. Proin ornare erat arcu, a consequat ligula hendrerit quis. Vivamus in varius purus. Ut finibus turpis a lorem lacinia, sit amet luctus.</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home
