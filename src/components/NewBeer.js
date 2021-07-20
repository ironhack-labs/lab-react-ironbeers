import {Link} from "react-router-dom"
import React from "react"

export default function NewBeer(){
    return (
        <div>
            <header className="layoutHead"><Link to="/"><img src="assets/house.png" alt="house"/></Link></header>
        </div>
    )
}