import React from 'react'
import {Link} from 'react-router-dom'


export default function Home(){
    return (<nav>
        <Link to='/beers' style={{margin: "10px", textDecoration:"none", color: "white", backgroundColor:"turquoise", padding:"20px", borderRadius:"10px"}}>
            All Beers
        </Link>
        <Link to='/random-beer' style={{margin: "10px", textDecoration:"none", color: "white", backgroundColor:"turquoise", padding:"20px", borderRadius:"10px"}}>
            Random Beer
        </Link>
        <Link to='/new-beer' style={{margin: "10px", textDecoration:"none", color: "white", backgroundColor:"turquoise", padding:"20px", borderRadius:"10px"}}>
            New Beer
        </Link>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>Welcome to the world of Ironbeers!</h1>
    </nav>
    )
}