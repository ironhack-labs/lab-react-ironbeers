import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
           
    <div><Link to='/beers'>All beers</Link><p></p>
    Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum
    </div> 
    <div><Link to='/random-beer'>Random beer</Link> <p></p>
    Lorem ipsum Lorem ipsum  Lorem ipsum  Lorem ipsum
    </div>
    <div><Link to='/new-beer'>New beer</Link><p></p>
    Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum
    </div>
   
        </div>
    )
}
