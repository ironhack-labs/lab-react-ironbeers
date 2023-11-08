import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return(
        <div>
            <ul>
                <div>
                    <img src="src\assets\beers.png"/>
                    <br/>
                    <Link to="/beers"><h2>All Beers</h2></Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eros urna, commodo ac sem sit amet, 
                     elementum eleifend risus. Morbi vel augue eget dui egestas sollicitudin ut in sem. Quisque semper 
                     dictum libero, non bibendum erat ullamcorper et. Nullam at turpis in lacus laoreet mattis.</p>
                </div>
                <div>
                    <img src="src\assets\random-beer.png"/>
                    <br/>
                    <Link to="/random-beer"><h2>Random Beer</h2></Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eros urna, commodo ac sem sit amet, 
                     elementum eleifend risus. Morbi vel augue eget dui egestas sollicitudin ut in sem. Quisque semper 
                     dictum libero, non bibendum erat ullamcorper et. Nullam at turpis in lacus laoreet mattis.</p>
                </div>
                <div>
                    <img src="src\assets\new-beer.png"/>
                    <br/>
                    <Link to="/new-beer"><h2>Create a new beer</h2></Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eros urna, commodo ac sem sit amet, 
                     elementum eleifend risus. Morbi vel augue eget dui egestas sollicitudin ut in sem. Quisque semper 
                     dictum libero, non bibendum erat ullamcorper et. Nullam at turpis in lacus laoreet mattis.</p>
                </div>
            </ul>
        </div>
    )
}

export default HomePage;
