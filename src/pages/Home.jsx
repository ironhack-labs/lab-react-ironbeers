import React from 'react'
import newbeer from "../assets/new-beer.png"
import beers from "../assets/beers.png"
import randombeer from "../assets/random-beer.png"
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div>

            <img src={newbeer}></img>
            <h1><Link to="/newbeer">New Beer</Link></h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor perferendis eligendi ea quasi non? Rem reprehenderit fuga, voluptatibus nam asperiores quaerat laboriosam necessitatibus expedita ex suscipit et tenetur, dolores autem?</p>
            <img src={beers}></img>
            <h1><Link to="/listbeers">All Beers</Link></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, exercitationem veniam pariatur qui ipsa iusto at hic, maiores nostrum, fuga enim autem fugiat non! Excepturi fuga laboriosam mollitia voluptas dolorem.</p>
            <img src={randombeer} alt="image of a beer"></img>
            <h1><Link to ="/randombeer">Random Beer</Link></h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla sunt, voluptatibus ipsum vitae aspernatur, odio odit totam est vero eveniet eaque nisi perferendis quas inventore aliquid minima. Delectus, aspernatur alias?</p>

        </div>
    )
}

export default Home