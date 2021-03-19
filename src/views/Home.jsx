import React from 'react'
import { Link } from "react-router-dom"

import beerImg from './../assets/beers.png'
import radomBeerImg from './../assets/random-beer.png'
import newBeerImg from './../assets/random-beer.png'

export default function Home() {
    return (
        <div>
            <div>
                <div><img src={beerImg} alt="beers"/></div>
                <Link to="/beers"><h1>All beers</h1></Link>
                <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, tempore magnam vitae nostrum voluptatum distinctio reiciendis dolor libero dolores aspernatur quisquam eaque iste? Ut pariatur consequatur saepe, hic blanditiis doloremque!</article>
            </div>
            <div>
                <div><img src={radomBeerImg} alt="random-beer"/></div>
                <Link to="/random-beer"><h1>Random Beer</h1></Link>
                <article>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ipsa, velit tempore magnam voluptate reiciendis? Unde, quos. Corporis, commodi eaque! Laudantium fuga beatae accusantium quaerat nam dicta. Et, quisquam ipsa?</article>
            </div>
            <div>
                <div><img src={newBeerImg} alt="new-beer"/></div>
                <Link to="/new-beer"><h1>New beer</h1></Link>
                <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptate nam enim officiis reprehenderit, hic libero doloribus nemo suscipit voluptas nihil! Sint accusamus illo ipsam asperiores voluptatum iure! Cumque, commodi.</article>
            </div>
        </div>
    )
}
