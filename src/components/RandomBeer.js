import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RandomBeer() {

    return(
        <header>
         
            <Link to="/homepage">
            <img
            src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
            alt="HeaderLink"
        />
             </Link>
             <h1>This is the Random Beer</h1>
        </header>
        
    )
  
}

export default RandomBeer;