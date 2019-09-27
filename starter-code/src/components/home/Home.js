import React from 'react'
import {Link} from 'react-router-dom'


export default function Home() {
  return (
    <div className="home">
      <h1>Ironbeers</h1>
      <div className="container">
        <img src="../images/beers.png" alt="beers.png"/>
        <div>
          <Link to="/beers"><h2>All Beers</h2></Link>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur fringilla fringilla. Sed sapien tellus, molestie eget purus id, placerat malesuada erat. Nullam ut ante consectetur risus tristique volutpat eget vitae enim. In vel dignissim tellus, vel fermentum ex. Vestibulum ut est sit amet lectus pellentesque rutrum. Mauris ac turpis viverra, scelerisque quam et, dapibus arcu.</p>
        </div>
      </div>
      <div className="container">
        <img src="../images/random-beer.png" alt="beers.png"/>
        <div>
          <Link to="/random-beer"><h2>Random Beers</h2></Link>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur fringilla fringilla. Sed sapien tellus, molestie eget purus id, placerat malesuada erat. Nullam ut ante consectetur risus tristique volutpat eget vitae enim. In vel dignissim tellus, vel fermentum ex. Vestibulum ut est sit amet lectus pellentesque rutrum. Mauris ac turpis viverra, scelerisque quam et, dapibus arcu.</p>
        </div>
      </div>
      <div className="container">
        <img src="../images/new-beer.png" alt="beers.png"/>
        <div>
          <Link to="/new-beer"><h2>New Beer</h2></Link>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur fringilla fringilla. Sed sapien tellus, molestie eget purus id, placerat malesuada erat. Nullam ut ante consectetur risus tristique volutpat eget vitae enim. In vel dignissim tellus, vel fermentum ex. Vestibulum ut est sit amet lectus pellentesque rutrum. Mauris ac turpis viverra, scelerisque quam et, dapibus arcu.</p>
        </div>
      </div>
    </div>
  )
}
