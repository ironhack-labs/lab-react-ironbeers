import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="all-containers">
            <div>
                <button className="btn-single"><Link className="link-single" to='/beers'>Go to All Beers</Link></button>
            </div>
            
            <div>
                <button className="btn-single"><Link className="link-single" to='/random-beer'>Get a Random Beer</Link></button>
            </div>
            
            <div>
                <button className="btn-single"><Link className="link-single" to='/new-beer'>Add a New Beer</Link></button>
            </div>
        </div>
    )
}
