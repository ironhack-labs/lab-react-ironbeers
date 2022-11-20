import React from 'react'
import {Link} from 'react-router-dom'
import beers from '../assets/beers.png'
import randombeers from '../assets/random-beer.png'
import newbeers from '../assets/new-beer.png'
import axios from 'axios'

function homepage() {

  return (
    <div>
        <img src={beers} alt=""/>
        <Link to='/Beers'>
            <h1>All Beers</h1>
        </Link>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur error optio consequatur odit officia atque deserunt rem dolores asperiores. Omnis quo fuga explicabo pariatur reprehenderit eos officia necessitatibus ea fugit?
            Incidunt, eius. Maxime quos quasi facilis nisi sed corporis vitae voluptatem! Fugit expedita dolores accusantium. Quo nulla ducimus beatae ipsa, eos placeat sapiente numquam, nihil eaque laborum totam, recusandae temporibus!</p>
        
        <img src={randombeers} alt=""/>
        <Link to='/Randombeer'><h1>Random Beer</h1></Link>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur error optio consequatur odit officia atque deserunt rem dolores asperiores. Omnis quo fuga explicabo pariatur reprehenderit eos officia necessitatibus ea fugit?
            Incidunt, eius. Maxime quos quasi facilis nisi sed corporis vitae voluptatem! Fugit expedita dolores accusantium. Quo nulla ducimus beatae ipsa, eos placeat sapiente numquam, nihil eaque laborum totam, recusandae temporibus!</p>
        
        <img src={newbeers} alt=""/>
        <Link to='/Newbeer'><h1>New Beer</h1></Link>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur error optio consequatur odit officia atque deserunt rem dolores asperiores. Omnis quo fuga explicabo pariatur reprehenderit eos officia necessitatibus ea fugit?
            Incidunt, eius. Maxime quos quasi facilis nisi sed corporis vitae voluptatem! Fugit expedita dolores accusantium. Quo nulla ducimus beatae ipsa, eos placeat sapiente numquam, nihil eaque laborum totam, recusandae temporibus!</p>
    </div>
  )
}

export default homepage