import React from 'react'
import img1 from '../assets/beers.png'
import img2 from '../assets/new-beer.png'
import img3 from '../assets/random-beer.png'
import { Routes, Route, Link } from "react-router-dom";
import "./Home.css"

export const Home = () => {
  return (
    <div className="home">
        <div>
            <img src={img1} alt="image1"/>
            <div><Link to="/beers">List of Beers</Link></div>
            <p>Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Fermentum iaculis eu non diam. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Nec tincidunt praesent semper feugiat. Non blandit massa enim nec dui nunc mattis enim ut. Nibh nisl condimentum id venenatis a. Enim eu turpis egestas pretium aenean pharetra magna ac. A pellentesque sit amet porttitor eget dolor morbi. Faucibus et molestie ac feugiat. Condimentum vitae sapien pellentesque habitant morbi. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat.</p>
        </div>
        <div>
            <img src={img2} alt="image1"/>
            <div><Link to="/random-beer">Random Beer</Link></div>
            <p>Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Adipiscing elit duis tristique sollicitudin. Duis ut diam quam nulla porttitor massa id neque. Eu lobortis elementum nibh tellus molestie nunc non blandit. Porta nibh venenatis cras sed felis. A condimentum vitae sapien pellentesque habitant morbi. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Dictum at tempor commodo ullamcorper a. In mollis nunc sed id semper. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies.</p>
        </div>
        <div>
            <img src={img3} alt="image1"/>
            <div><Link to="new-beer">New Beer</Link></div>
            <p>Augue mauris augue neque gravida in. Non sodales neque sodales ut etiam sit. Id ornare arcu odio ut sem nulla pharetra diam. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Auctor eu augue ut lectus. Dolor magna eget est lorem. Mattis enim ut tellus elementum sagittis vitae et leo duis. Libero justo laoreet sit amet. Sit amet cursus sit amet dictum sit amet justo. Eget duis at tellus at urna condimentum mattis pellentesque. Turpis egestas integer eget aliquet nibh praesent tristique. Ipsum suspendisse ultrices gravida dictum. Commodo nulla facilisi nullam vehicula ipsum a arcu. Nibh ipsum consequat nisl vel. Sit amet est placerat in egestas erat imperdiet sed. Feugiat vivamus at augue eget arcu dictum. Euismod elementum nisi quis eleifend quam adipiscing. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Ut lectus arcu bibendum at varius vel. Eget lorem dolor sed viverra ipsum nunc.</p>
        </div>
    </div>
  )
}

export default Home;