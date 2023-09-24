import React from 'react'
import beerspng from "../assets/beers.png"
import randombeerpng from "../assets/random-beer.png"
import newbeerpng from "../assets/new-beer.png"
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div>
            <img src={beerspng} alt="" />
            <br />
            <Link to="/beers"><h2>All Beers</h2></Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias similique facere sint veniam totam ipsum eos hic rem. Illo deserunt officia quia doloremque corporis dicta accusamus consequuntur eius fuga eveniet.</p>
            <br />
            <img src={randombeerpng} alt="" />
            <br />
            <Link to="/random-beer"><h2>Random Beer</h2></Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias similique facere sint veniam totam ipsum eos hic rem. Illo deserunt officia quia doloremque corporis dicta accusamus consequuntur eius fuga eveniet.</p>
            <br />
            <img src={newbeerpng} alt="" />
            <br />
            <Link to="/new-beer"><h2>New Beer</h2></Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias similique facere sint veniam totam ipsum eos hic rem. Illo deserunt officia quia doloremque corporis dicta accusamus consequuntur eius fuga eveniet.</p>
            

        </div>
    )
}

export default Home
