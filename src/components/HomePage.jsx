import React from 'react'
import { Link } from 'react-router-dom'
import BeersImage from "../assets/beers.png"
import RandomImage from "../assets/random-beer.png"
import NewImage from "../assets/new-beer.png"


function HomePage() {

  return (
    <div>
    <div>
      <img src={BeersImage} alt="" />
        <Link to={"/beers"}> All Beers</Link>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi necessitatibus doloremque dolorum voluptates, ratione id esse beatae exercitationem totam explicabo quos quisquam ea quis sint aperiam ex accusamus ipsum quidem!</p>
        </div>
        
        <div>
        <img src={RandomImage} alt="" />
        <Link to={"/random-beer"} >Random Beer</Link>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta natus ratione architecto! Omnis autem ea commodi quod magnam repellat veritatis asperiores sunt fugit cupiditate, iure cum ratione labore atque optio!</p>
        </div>
        <div>
        <img src={NewImage} alt="" />
        <Link to="/new-beer">New Beer</Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus itaque et expedita nemo delectus placeat earum natus facilis cupiditate possimus voluptates, hic omnis explicabo sed tenetur mollitia iure, quis blanditiis.</p>
        </div>
    
    </div>
)
}

export default HomePage