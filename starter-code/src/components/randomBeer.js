import React from "react";
import {Link} from "react-router-dom";
export default class RandomBeer extends React.Component{
    render(){
        return(
            <div>
            <div>
        <nav className="navbar">
        <Link to={"/"}> <button>🍻</button></Link>
        </nav>  
</div>


                <h1>Random Beer</h1>
            </div>
        )
    }
    
}